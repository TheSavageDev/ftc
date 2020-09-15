import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/style.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
