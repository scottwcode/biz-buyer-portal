import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    listingJson(slug: { eq: $slug }) {
      slug
      name
      asking_price
      cash_flow
      pe
      city
      state
      detail_url
    }
  }
`

const ListingPage = ({ data }) => {
  const listing = data.listingJson

  return (
    <Layout>
      <br></br>
      <br></br>
      <h2>{listing.slug}</h2>
      <h2>{listing.name}</h2>
      <h4>{listing.asking_price}</h4>
      <h4>{listing.cash_flow}</h4>
      <h4>{listing.pe}</h4>
      <h4>{listing.city}</h4>
      <h4>{listing.state}</h4>
      <h4>{listing.detail_url}</h4>
    </Layout>
  )
}

export default ListingPage
