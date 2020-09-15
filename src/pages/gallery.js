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
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight pb-2 text-black">
          Gallery
        </h1>
        <article>
          <ul className="flex flex-wrap">
            {edges?.map(({ node }) => (
              <li className="h-40 flex-grow m-0 p-0">
                <Image 
                  key={node.id}
                  cloudName="thesavagedev"
                  publicId={node.public_id}
                  className="border-none max-h-full max-w-full object-cover align-bottom m-0 p-0"
                  alt="image"
                  secure="true"
                >
                  <Transformation crop="fit" />
                </Image>
              </li>
            ))}
            <li className="flex-grow"></li>
          </ul>
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
