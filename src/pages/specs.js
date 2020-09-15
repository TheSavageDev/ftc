import { Image } from "cloudinary-react"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const SpecsPage = () => (
  <Layout>
    <SiteMetadata title="Specifications" description="Specifications" />
      <section className="container py-6 flex flex-wrap w-full">
        <section className="xl:w-3/4">
          <article className="mt-4 leading-loose xl:w-3/4">
            <h2 className="text-2xl leading-tight font-semibold tracking-tight text-orange">Our Goal</h2>
            <p>The Foldaway Trailer was designed specifically to meet the needs of
            people who once in a while need a trailer, but find that it’s a hassle
            to go rent one, and don’t have space to buy and store one. The design
            has three goals:</p>
            <ol className="list-decimal pl-10">
              <li>Each component weighs 40 lbs. or less so anyone can open or fold it, carry it up stairs, and store it in their closet.</li>
              <li>The final folded size that will actually fit into a closet.</li>
              <li>Hold a 4x8 sheet of plywood</li>
              <li>Carry 900 pounds. Just for reference, that’s about 18 bags of gravel or several appliances.</li>
            </ol>
            <p>The Foldaway Trailer meets these needs through a patent pending design that leverages the strengths of
            aluminum using a new concept in suspension and a bridge-like support system.</p>
          </article>
        
          <article className="mt-4 leading-loose xl:w-3/4">
            <h2 className="text-2xl leading-tight font-semibold tracking-tight text-orange">Our Unique Advantages</h2>
            <p>The Foldaway Trailer (Patent Pending) also uses a Kevlar floor that is tear and stretch resistant. Kevlar
            has a tensile strength 40 times that of structural steel (A36) by weight. The Kevlar floor is strong,
            lightweight and abrasion resistant.</p>
            <p>The frame support was inspired by a suspension bridge. It allows transmission of load from one end to the 
            other, thus supporting the ends of the trailer. This unique design results in a strong but very 
            lightweight trailer.</p>
            <p>The suspension is a unique engineering design using quarter-elliptical
            springs, which have been around for a century, but separated by a spacer
            that allows the springs to form a “virtual box” and resist lateral
            forces while allowing vertical movement. This eliminates the long rigid
            suspension arm used by other systems. Again, using better design and
            engineering principles rather than brute force methods reduces weight
            and complexity while preserving the suspension performance.</p>
          </article>
        </section>
        <aside className="w-full xl:w-1/4">
          <Image
            cloudName="thesavagedev"
            alt="Trailer tire"
            publicId="FTC/ProductImages/bdr87ccwxufjd2qo8uip"
            className="rounded-lg shadow-md"
            secure="true"
          />
        </aside>
      </section>
  </Layout>
)

export default SpecsPage
