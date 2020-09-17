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
            <p>The Foldaway Trailer was designed specifically to meet the needs of people who occasionally need a trailer, but find it’s a hassle to go rent one, and don’t have space to store one. The design
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
            <ul className="list-disc pl-10">
              <li>The Foldaway Trailer (Patent Pending) uses a tear, stretch and abrasion resistant Kevlar floor. Alternative products frequently don't include a floor and adding one requires tools many homeowners don't have.</li>
              <li>The Foldaway Trailer can be assembled without tools in less than five minutes.  Alternatives require a complex assembly process using various tools.</li>
              <li>The Foldaway Trailer frame distributes loads from end to end using a suspension bridge inspired design. This unique design results in a strong, very lightweight trailer.</li>
              <li>The  Foldaway Trailer's suspension is a unique engineering design using quarter-elliptical springs.  These springs have been used for a century, but this new design separates the springs by a spacer that makes them into a “virtual box” that resists lateral forces while allowing vertical movement. This eliminates the long rigid suspension arm or axle used by other systems. Again, better design and engineering principles rather than brute force methods reduces weight and complexity while preserving suspension performance.</li>
            </ul>
          </article>
        </section>
        <aside className="w-full xl:w-1/4">
          <Image
            cloudName="thesavagedev"
            alt="Trailer tire"
            publicId="FTC/ProductImages/Gallery%20025"
            className="rounded-lg shadow-md"
            secure="true"
          />
        </aside>
      </section>
  </Layout>
)

export default SpecsPage
