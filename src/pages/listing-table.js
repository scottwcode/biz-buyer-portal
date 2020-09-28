import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Table, Button } from "react-bootstrap"

export const query = graphql`
  query {
    allListingJson(sort: { fields: [state, city], order: [ASC, DESC] }) {
      nodes {
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
  }
`

const Listing = ({ data }) => {
  const listing = data.allListingJson

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <Layout>
        <Container>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>Businesses for Sale</h1>
          <h3>Source: JSON</h3>
          <p>Click a column header button to sort by that column Asc/Desc:</p>
          <Table responsive="md" striped bordered hover className="noWrap">
            <thead>
              <tr>
                <th>
                  <Button variant="outline-primary">Name</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">Asking Price</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">Cash Flow</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">PE</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">City</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">State</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">detail_url</Button>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {listing.nodes.map(biz => (
                <tr> */}
              {listing.nodes.map((biz, index) => (
                <tr key={`content_name_${index}`}>
                  <td>
                    <Link to={`/listing/${biz.slug}`}>{biz.name}</Link>
                  </td>
                  <td>{biz.asking_price}</td>
                  <td>{biz.cash_flow}</td>
                  <td>{biz.pe}</td>
                  <td>
                    <Link to={`/listing-filter-city/${biz.city}`}>
                      {biz.city}
                    </Link>
                  </td>
                  <td>{biz.state}</td>
                  <td>
                    <Link to={`${biz.detail_url}`}>click here for details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Layout>
    </div>
  )
}

export default Listing
