import React from "react"
import { graphql, Link } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allListingJson {
      nodes {
        name
        asking_price
        cash_flow
        pe
        city
        state
        detail_url
        slug
      }
    }
  }
`

const Listing = ({ data }) => {
  const listing = data.allListingJson

  return (
    <Layout>
      <h1>Listings</h1>
      {listing.nodes.map(biz => (
        <div>
          <Link to={`/listing/${biz.slug}`}>{biz.name}</Link>
          <p>Asking Price: {biz.asking_price}</p>
          <p>Cash Flow: {biz.cash_flow}</p>
          <p>PE: {biz.pe}</p>
          <p>City: {biz.city}</p>
          <p>State: {biz.state}</p>
          <p>
            detail_url:{" "}
            <Link to={`${biz.detail_url}`}>click here for details</Link>
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default Listing
