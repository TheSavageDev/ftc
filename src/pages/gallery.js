import { Image, Transformation } from 'cloudinary-react';
import { graphql } from "gatsby";
import React from "react";
import Modal from '../components/Modal';
import SiteMetadata from "../components/SiteMetadata";
import Layout from "../layouts/Layout";


const GalleryPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [bigPid, setBigPid] = React.useState('');
  const [imageIndex, setImageIndex] = React.useState();

  const { edges } = data.allCloudinaryMedia
  const handleOpenBigImage = index => {
    console.log('CLICK MOTHERFUCKER')
    setImageIndex(index);
    setBigPid(edges[index].node.public_id);
    setIsOpen(true);
    console.log(isOpen)
  }

  const handleNext = () => handleOpenBigImage(imageIndex + 1);
  const handlePrev = () => handleOpenBigImage(imageIndex - 1);
  return (
    <Layout>
      <SiteMetadata title="Gallery" description="Product Images" />
      <section className="container py-6 flex flex-wrap w-full">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight pb-2 text-black">
          Gallery
        </h1>
        <article>
          <ul className="flex flex-wrap">
            {edges?.map(({ node }, index) => (
              <li key={node.id} id={node.id} className="h-40 flex-grow m-0 p-0" onClick={() => handleOpenBigImage(index)}>
                <Image 
                    cloudName="thesavagedev"
                    publicId={node.public_id}
                    className="border-none max-h-full max-w-full object-cover align-bottom m-0 p-0"
                    alt="image"
                    secure="true"
                    format="webp"
                  >
                    <Transformation crop="fit" />
                  </Image>
              </li>
            ))}
            <li className="flex-grow"></li>
          </ul>
        </article>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} publicId={bigPid} handleNext={handleNext} handlePrev={handlePrev} />  
    </Layout>
  )
}

export default GalleryPage

export const query = graphql`
  query {
    allCloudinaryMedia(filter: {public_id: {regex: "/ProductImages/"}},  sort: {fields: public_id, order: ASC}) {
      edges {
        node {
          public_id
          url
        }
      }
    }
  }
`
