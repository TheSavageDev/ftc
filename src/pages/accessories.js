import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const AccessoriesPage = () => (
  <Layout>
    <SiteMetadata title="Accessories" description="Accessories page." />
    <section className="container flex flex-wrap py-6 w-full pb-8">
      <header>
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black">
          Accessories
        </h1>
      </header>
      <article className="w-full">
        <h2 className="text-2xl leading-tight font-semibold tracking-tight text-blue">
          Coming soon...
        </h2>
      </article>
    </section>
  </Layout>
)

export default AccessoriesPage
