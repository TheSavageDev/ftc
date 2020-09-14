import PropTypes from "prop-types"
import React from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "./Carousel.css"


export const Carousel = ({ images }) => {
  const swiperParams = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  }
  return (
    <Swiper {...swiperParams}>
      {images.map(({ node }) => {
        return (
          <span key={`slide_${node.id}`}>
            <img
              className="rounded shadow border-none max-w-sm h-auto"
              src={node.url}
              alt={node.url}
            />
          </span>
        )
      })}
    </Swiper>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
