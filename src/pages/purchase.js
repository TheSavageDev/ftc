import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const PurchasePage = () => (
  <Layout>
    <SiteMetadata title="Get One" description="Purchase form" />
      <section className="container flex flex-wrap w-full py-6">
        <header className="w-full">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black p-0">
            Get One
          </h1>
          <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue">
            We'd love to hear from you.
          </h2>
        </header>
        <form className="bg-grey shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-5 w-full" action="/thanks" name="purchase" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="purchase" />
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>   
          <input type="text" name="name" id="name" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
          <label className="block text-black text-sm font-bold mb-2" htmlFor="subject">City/State</label>   
          <input type="text" name="subject" id="subject" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
          <button className="bg-blue hover:bg-teal text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4" type="submit">Request Quote</button>
      </form>
    </section>
  </Layout>
)

export default PurchasePage
