import { Image, Transformation, Video } from 'cloudinary-react';
import { graphql } from "gatsby";
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from "react";
import Hero from "../components/Hero";
import SiteMetadata from "../components/SiteMetadata";
import Layout from "../layouts/Layout";
const IndexPage = ({ data }) => {
  const images = data.images.edges
  const video = data.videos.edges[0].node

  const handleRebuild = () => {
    fetch('https://api.netlify.com/build_hooks/5f624edcb0ade21370d21f3e', { method: 'POST' })
  }
  return (
    <Layout>
      <SiteMetadata title="Home" description="Website for Foldaway Tailer Company" />
      <Hero />
      <section className="container flex flex-col pb-4 lg:flex-row">
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
          >
            <Slider>
              {images?.map(({ node }, index) => (
                <Slide index={index} key={node.id}>
                  <Image
                    cloudName="thesavagedev"
                    className="border-none max-h-full max-w-full object-cover align-bottom m-0 p-0"
                    publicId={node.public_id}
                    alt={node.secure_url}
                    secure="true"
                  >
                    <Transformation crop="fit" />
                  </Image>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </article>
        <article className="mx-auto">
          <img alt="Netlify" src="https://img.shields.io/netlify/d9859da3-d684-4c5a-8cdc-b3c310381a6d?label=BUILD&style=for-the-badge" className="my-4" />
          <button type="button" className="text-white rounded-xl border bg-blue inline-block p-3 text-2xl hover:bg-teal" onClick={handleRebuild}>Click to Rebuild</button>
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
