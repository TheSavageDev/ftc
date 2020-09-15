import { Image, Transformation } from 'cloudinary-react';
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <header className="container py-4 bg-blue text-orange">
      <section className="flex justify-between items-center">
        <Link to="/">
          <Image cloudName="thesavagedev" publicId="FTC/Logos/morbybaqrvv0sxhheqax" secure="true">
            <Transformation crop="fit" width="200" />
          </Image>
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <article className="hidden lg:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 text-sm font-medium px-px border-b-2 pb-2 border-transparent text-white hover:text-white hover:border-orange transition duration-150 ease-in-out"
              activeClassName="border-orange text-white hover:border-orange"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </article>
      </section>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </header>
  )
}

export default Header
