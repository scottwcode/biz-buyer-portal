import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Table } from "react-bootstrap"
// import { node } from "prop-types"
import { Button } from "react-bootstrap"

// var sort_field = "city"

const BizListingPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>Biz Listings - by name ASC</h1>
          <p>Click a column header button to sort by that column Asc/Desc:</p>
          <Table responsive="md" striped bordered hover className="noWrap">
            <thead>
              <th>
                <Link to="/graphql-firestore-biz-listings-name/">
                  <Button variant="outline-primary">Biz Name</Button>{" "}
                </Link>
              </th>
              <th>
                <Link to="/graphql-firestore-biz-listings-ap/">
                  <Button variant="outline-primary">Asking Price</Button>{" "}
                </Link>
              </th>
              <th>
                <Link to="/graphql-firestore-biz-listings/">
                  <Button variant="outline-primary">City</Button>{" "}
                </Link>
              </th>
              <th>
                <Link to="/graphql-firestore-biz-listings/">
                  <Button variant="outline-primary">State</Button>{" "}
                </Link>
              </th>
              {/* <td>Biz Name</td>
              <td>Asking Price</td>
             <td>Cash Flow</td>
              <td>PE</td>
              <td>City</td>
              <td>State</td> */}
            </thead>
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

// filter: { state: { eq: "VA" } }

export const query = graphql`
  query {
    allBizListing(sort: { fields: [name], order: [ASC] }) {
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
