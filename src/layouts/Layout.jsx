import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/style.css"

const Layout = ({ children }) => {
  const handleRebuild = () => {
    fetch('https://api.netlify.com/build_hooks/5f624edcb0ade21370d21f3e', { method: 'POST' })
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <article className="mx-auto flex">
          <img alt="Netlify" src="https://img.shields.io/netlify/d9859da3-d684-4c5a-8cdc-b3c310381a6d?label=BUILD&style=for-the-badge" className="my-4" />
          <button type="button" className="text-white rounded-xl border bg-blue inline-block p-2 text-xl hover:bg-teal" onClick={handleRebuild}>Click to Rebuild</button>
        </article>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
