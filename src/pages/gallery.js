import { Image } from 'cloudinary-react'
import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const GalleryPage = ({ data }) => {
  const { edges } = data.allCloudinaryMedia
  return (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-blue-900">
      <div className="container py-4 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight pb-2 text-gray-100 sm:text-4xl">
              Gallery
            </h1>
            <div className="flex flex-wrap">
              {edges?.map(({ node }) => (
                <div className="w-6/12 sm:w-4/12 px-2" key={node.public_id}>
                  <Image cloudName="thesavagedev" publicId={node.public_id} className="rounded shadow border-none max-w-sm h-auto" src={node.url} alt="image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
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
