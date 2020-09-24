import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Table } from "react-bootstrap"
// import { node } from "prop-types"
// import { Button } from "react-bootstrap"

const BizListingPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>Biz Listings</h1>
          <Table responsive="md" striped bordered hover className="noWrap">
            <tr>
              <td>Biz Short Description</td>
              <td>Asking Price</td>
              {/* <td>Cash Flow</td>
              <td>PE</td> */}
              <td>City</td>
              <td>State</td>
            </tr>
            {data.allBizListing.edges.map(({ node, index }) => (
              <tr>
                <td>{node.name}</td>
                <td>{node.asking_price}</td>
                {/* <td>{node.cash_flow}</td>
                <td>{node.pe}</td> */}
                <td>{node.city}</td>
                <td>{node.state}</td>
              </tr>
            ))}
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default BizListingPage

export const query = graphql`
  query {
    allBizListing {
      edges {
        node {
          name
          asking_price
          city
          state
        }
      }
    }
  }
`
