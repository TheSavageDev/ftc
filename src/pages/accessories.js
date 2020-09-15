import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const AccessoriesPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black sm:text-4xl">
              Accessories
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue sm:text-2xl">
              Coming soon...
            </h2>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default AccessoriesPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
