import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import JSONData from "../data/2019-01-20-wsc.json"
import { Container, Table, Button } from "react-bootstrap"
// import { Button } from "react-bootstrap"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <Link to="/">Go back to the homepage</Link> <br />
          <h1>JSON File Contents</h1>
          <Table responsive="md" striped bordered hover className="noWrap">
            <thead>
              <tr>
                <th>
                  <Button variant="outline-primary">Name</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">Asking_Price</Button>{" "}
                </th>
                <th>
                  <Button variant="outline-primary">Cash_Flow</Button>{" "}
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
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  {/* <td>{node.relativePath}</td> */}
                  {/* <td>{node.internal.content}</td> */}
                  {JSONData.content.map((data, index) => {
                    return (
                      <tr key={`content_name_${index}`}>
                        <td>{data.name}</td>
                        <td>{data.asking_price}</td>
                        <td>{data.cash_flow}</td>
                        <td>{data.pe}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                      </tr>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativePath: { eq: "2019-01-20-wsc.json" } }) {
      edges {
        node {
          relativePath
          internal {
            content
          }
        }
      }
    }
  }
`
