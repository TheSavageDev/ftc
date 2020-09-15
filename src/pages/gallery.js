import { Image, Transformation } from 'cloudinary-react'
import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const GalleryPage = ({ data }) => {
  const { edges } = data.allCloudinaryMedia
  return (
    <Layout>
      <SiteMetadata title="Gallery" description="Product Images" />
      <section className="container py-6 flex flex-wrap w-full">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight pb-2 text-gray-100">
          Gallery
        </h1>
        <article className="flex flex-wrap justify-evenly">
          {edges?.map(({ node }) => (
            <Image key={node.id} cloudName="thesavagedev" publicId={node.public_id} className="rounded-lg shadow border-none h-auto lg:w-1/4 lg:my-1 xl:w-2/12" alt="image" secure="true">
              <Transformation crop="fit" />
            </Image>
          ))}
        </article>
        </section>    
    </Layout>
  )
}

export default GalleryPage

export const query = graphql`
  query {
    allCloudinaryMedia(filter: {public_id: {regex: "/ProductImages/"}}) {
      edges {
        node {
          public_id
          url
        }
      }
    }
  }
`
