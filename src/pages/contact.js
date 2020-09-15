import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const ContactPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black sm:text-4xl">
              Contact
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue sm:text-2xl">
              We'd love to hear from you.
            </h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
                <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>   
                <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                <label className="block text-black text-sm font-bold mb-2" htmlFor="subject">Subject</label>   
                <input type="text" name="subject" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                <label className="block text-black text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea name="message" id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"></textarea>
                <button className="bg-blue hover:bg-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default ContactPage

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
