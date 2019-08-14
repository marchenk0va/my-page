module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    description: `My personal static website, built with Gatsby and React`,
    author: `Mariia Marchenkova`,
    siteUrl: 'https://www.iammariia.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
