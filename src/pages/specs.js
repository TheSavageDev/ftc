import { Image } from "cloudinary-react"
import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-black sm:text-4xl">
              Specifications
            </h1>
            <div className="mt-4 leading-loose">
              <h3 className="text-xl leading-tight font-semibold tracking-tight sm:text-xl text-orange">Our Goal</h3>
              The Foldaway Trailer was designed specifically to meet the needs of
              people who once in a while need a trailer, but find that it’s a hassle
              to go rent one, and don’t have space to buy and store one. The design
              has three goals:
              <br />
              <br />
              <ol className="list-decimal pl-10">
                <li>Each component weighs 40 lbs. or less so anyone can open or fold it, carry it up stairs, and store it in their closet.</li>
                <li>The final folded size that will actually fit into a closet.</li>
                <li>Hold a 4x8 sheet of plywood</li>
                <li>Carry 900 pounds. Just for reference, that’s about 18 bags of gravel or several appliances.</li>
              </ol>
              <br />
              The Foldaway Trailer meets these needs through a patent pending design that leverages the strengths of aluminum using a new concept in suspension and a bridge-like support system.
              <br />
              <br />
              <h3 className="text-xl leading-tight font-semibold tracking-tight sm:text-xl text-orange">Our Unique Advantages</h3>
              The Foldaway Trailer (Patent Pending) also uses a Kevlar floor that is tear and stretch resistant. Kevlar
              has a tensile strength 40 times that of structural steel (A36) by weight. The Kevlar floor is strong,
              lightweight and abrasion resistant.
              <br />
              <br />
              The frame support was inspired by a suspension bridge. It allows transmission of load from one end to the 
              other, thus supporting the ends of the trailer. This unique design results in a strong but very 
              lightweight trailer.
              <br />
              <br />
              The suspension is a unique engineering design using quarter-elliptical
              springs, which have been around for a century, but separated by a spacer
              that allows the springs to form a “virtual box” and resist lateral
              forces while allowing vertical movement. This eliminates the long rigid
              suspension arm used by other systems. Again, using better design and
              engineering principles rather than brute force methods reduces weight
              and complexity while preserving the suspension performance.
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Image
              cloudName="thesavagedev"
              alt="Trailer tire"
              publicId="FTC/ProductImages/bdr87ccwxufjd2qo8uip"
              className="rounded-md shadow-md"
              secure="true"
            />
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default AboutPage

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
