import React from "react";
import Slider from 'react-slick'
import { Image, Transformation } from 'cloudinary-react';

const LazyloadImage = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    autoPlay: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images?.map(({ node }, index) => (
        <div index={index} key={node.id}>
          <Image
            cloudName="thesavagedev"
            className="border-none max-w-full object-cover align-bottom m-0 p-0 justify-center"
            publicId={node.public_id}
            alt={node.secure_url}
            secure="true"
          >
            <Transformation crop="fit" />
          </Image>
        </div>
      ))}
    </Slider>
  );
}

export default LazyloadImage
