import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Table } from "react-bootstrap"
// import { node } from "prop-types"
// import { Button } from "react-bootstrap"

const BandPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>Bands</h1>
          <Table responsive="md" striped bordered hover className="noWrap">
            <tr>
              <td>GENRE</td>
              <td>TITLE</td>
              <td>WEBSITE</td>
            </tr>
            {data.allBand.edges.map(({ node, index }) => (
              <tr>
                <td>{node.genre}</td>
                <td>{node.name}</td>
                <td>{node.site}</td>
              </tr>
            ))}
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default BandPage

export const query = graphql`
  query {
    allBand {
      edges {
        node {
          name
          genre
          site
        }
      }
    }
  }
`
