import { Image, Transformation, Video } from 'cloudinary-react';
import { graphql } from "gatsby";
import { CarouselProvider, Slide, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from "react";
import Hero from "../components/Hero";
import SiteMetadata from "../components/SiteMetadata";
import Layout from "../layouts/Layout";
const IndexPage = ({ data }) => {
  const images = data.images.edges
  const video = data.videos.edges[0].node

  return (
    <Layout>
      <SiteMetadata title="Home" description="Website for Foldaway Tailer Company" />
      <Hero />
      <section className="container flex flex-col lg:pb-4 lg:flex-row">
        <article className="w-full lg:w-1/2">
          <Video
          cloudName="thesavagedev"
          publicId={video.public_id}
          controls="true" />
        </article>
        <article className="w-full lg:w-1/2">
          <CarouselProvider
            totalSlides={7}
            naturalSlideHeight={135}
            naturalSlideWidth={250}
            touchEnabled={true}
            className="relative w-full h-full"
          >
            <Slider className="absolute w-full h-full">
              {images?.map(({ node }, index) => (
                <Slide index={index} key={node.id} className="flex justify-evenly">
                  <Image
                    cloudName="thesavagedev"
                    className="border-none max-w-full object-cover align-bottom m-0 p-0 justify-center"
                    publicId={node.public_id}
                    alt={node.secure_url}
                    secure="true"
                  >
                    <Transformation crop="fit" />
                  </Image>
                </Slide>
              ))}
            </Slider>
              <ButtonBack className="absolute inset-y-0 left-0 px-5 py-3 font-medium leading-snug border-none text-base text-white bg-black opacity-25 hover:opacity-100 transition duration-150 ease-in-out">&lt;</ButtonBack>
              <ButtonNext className="absolute inset-y-0 right-0 px-5 py-3 font-medium leading-snug border-none text-base text-white bg-black opacity-25 hover:opacity-100 transition duration-150 ease-in-out">&gt;</ButtonNext>
          </CarouselProvider>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SequenceQuery {
    images: allCloudinaryMedia(filter: {public_id: {regex: "/FTC\/Slideshow/"}}, sort: {fields: public_id, order: ASC}) {
      edges {
        node {
          public_id
          id
          secure_url
        }
      }
    }
    videos: allCloudinaryMedia(filter: {public_id: {regex: "/Videos/"}}) {
      edges {
        node {
          public_id
        }
      }
    }
  }
`
