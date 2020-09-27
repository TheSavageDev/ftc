import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const ContactPage = () => (
  <Layout>
    <SiteMetadata title="Contact" description="Contact form" />
      <section className="container py-6 flex flex-wrap w-full">
        <header className="w-full">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black">
            Contact
          </h1>
          <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue">
            We'd love to hear from you.
          </h2>
        </header>
        <form className="bg-grey shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-5 lg:w-full" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-black text-sm font-bold mb-2" htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea name="message" id="message" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"></textarea>
            <button className="bg-blue hover:bg-teal text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4" type="submit">Send Message</button>
        </form>
      </section>
  </Layout>
)

export default ContactPage

