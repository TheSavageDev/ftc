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
    <div className="flex flex-col h-100">
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
