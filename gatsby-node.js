exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const queryResults = await graphql(`
    {
      allListingJson {
        edges {
          node {
            city
            slug
          }
        }
      }
    }
  `)

  if (queryResults.errors) {
    console.log("Error retrieving data", queryResults.errors)
    return
  }

  const listingFilterCityTemplate = require.resolve(
    "./src/templates/ListingFilterCityPage.js"
  )

  const listingTemplate = require.resolve("./src/templates/ListingPage.js")

  queryResults.data.allListingJson.edges.forEach(edge => {
    createPage({
      path: `/listing-filter-city/${edge.node.city}/`,
      component: listingFilterCityTemplate,
      context: {
        city: edge.node.city,
        // node: edge.node,
      },
    })
    createPage({
      path: `/listing/${edge.node.slug}/`,
      component: listingTemplate,
      context: {
        slug: edge.node.slug,
        // node: edge.node,
      },
    })
  })
}
