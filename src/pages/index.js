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
  console.log(video);
  return (
    <Layout>
      <SiteMetadata title="Home" description="Website for Foldaway Tailer Company" />

      <Hero />
      <div className="container flex pb-4">
        <div className="w-1/2">
          <Video cloudName="thesavagedev" publicId={video.public_id} autoPlay />
        </div>
        <div className="w-1/2">
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
                    className="rounded shadow border-none h-auto max-w-lg align-middle justify-center"
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
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SequenceQuery {
    images: allCloudinaryMedia(filter: {public_id: {regex: "/FTC\/ProductImages\/Sequence/"}}) {
      edges {
        node {
          public_id
          id
          format
          height
          width
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
