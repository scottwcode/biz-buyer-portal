module.exports = {
  siteMetadata: {
    title: `Biz Buyer Portal`,
    description: `A Portal where you can view, sort and filter businesses that are for sale from several publicly listed websites.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
        plugins: [`gatsby-transformer-json`],
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
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./firebase-biz-buyer-portal-test.json"),
        // credential: require("./firebase-biz-buyer-portal.json"),
        // firebase database root url
        // databaseURL: "https://biz-buyer-portal-test.firebaseio.com",
        types: [
          {
            type: "Band",
            collection: "band",
            map: doc => ({
              name: doc.name,
              genre: doc.genre,
              site: doc.website,
            }),
          },
          {
            type: "BizListing",
            collection: "bizListing",
            map: doc => ({
              name: doc.name,
              asking_price: doc.asking_price,
              // cash_flow: doc.cash_flow,
              // pe: doc.pe,
              location: doc.location,
              city: doc.city,
              state: doc.state,
              detail_url: doc.detail_url,
            }),
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
