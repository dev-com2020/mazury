

module.exports = {
  siteMetadata:{
    title: `10 rzeczy, których prawdopodobnie nie wiesz o Mazurach`,
    author: `Strefa Kursów`,
    description: `strona o mazurach`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options:{
        name: `Mazury`,
        short_name: `Mazury`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        },
        },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
  ],
}
