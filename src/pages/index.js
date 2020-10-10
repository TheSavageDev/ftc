import { Image, Transformation, Video } from 'cloudinary-react';
import { graphql } from "gatsby";
import { CarouselProvider, Slide, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from "react";
import Hero from "../components/Hero";
import SiteMetadata from "../components/SiteMetadata";
import Layout from "../layouts/Layout";
import LazyLoader from '../components/LazyLoader';

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
          controls={true} />
        </article>
        <article className="w-full mb-10 lg:mb-0 lg:w-1/2">
          <LazyLoader images={images} />
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
