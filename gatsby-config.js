module.exports = {
  siteMetadata: {
    title: `Christine Vallaure`,
    description: `Berlin based UX/UI Designer with a passion for code`,
    author: `Christine Vallaure`,
    keywords: 'UX, UI, Webdesign, Design, Appdesign, App Design, Web Design, Teaching, Berlin, Sketch, React, InVision, Prototyping',
    image: `src/images/_christinevallaure.jpg`,//new
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
