import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Table } from "react-bootstrap"
// import { node } from "prop-types"
import { Button } from "react-bootstrap"

const BizListingPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>Biz Listings</h1>
          <p>Click a column header button to sort by that column Asc/Desc:</p>
          <Table responsive="md" striped bordered hover className="noWrap">
            <thead>
              <th>
                <Button variant="outline-primary">Biz Name</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">Asking Price</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">City</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">State</Button>{" "}
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

export const query = graphql`
  query {
    allBizListing(
      filter: { state: { eq: "VA" } }
      sort: { fields: asking_price, order: DESC }
    ) {
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
