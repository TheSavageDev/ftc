require("dotenv").config()

const settings = require("./src/util/site.json")
const cloudinary = require("./src/util/cloudinary");

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        ...cloudinary,
        resourceType: `image`,
        prefix: `FTC/Logos`,
      }
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        ...cloudinary,
        resourceType: `image`,
        prefix: `FTC/ProductImages/`,
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        ...cloudinary,
        resourceType: `image`,
        prefix: `FTC/Slideshow/`,
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        ...cloudinary,
        resourceType: `video`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: settings.ga,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby-cloudinary',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: settings.manifest,
    },
    'gatsby-plugin-offline',
  ],
}
