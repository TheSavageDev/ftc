import { Image } from "cloudinary-react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer className="container flex py-2 items-center flex-col bg-teal text-white lg:flex-row lg:justify-between">
      <ul className="flex mb-4 justify-center lg:order-3 lg:mb-0">
        <FooterLink href={links.twitter} icon={FaTwitter} label="Twitter" />
        <FooterLink href={links.facebook} icon={FaFacebook} label="Facebook" />
        <FooterLink
          href={links.instagram}
          icon={FaInstagram}
          label="Instagram"
        />
      </ul>
      <Image className="lg:order-2" cloudName="thesavagedev" publicId="FTC/Logos/jsykgs9nwikgx89jqqzt" secure="true" />
      <section className="mt-8 lg:order-1 lg:mt-0">
        <p className="text-center text-sm">
          &copy; 2020 Foldaway Trailer Company.<br /> All rights reserved.
        </p>
      </section>
    </footer>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
