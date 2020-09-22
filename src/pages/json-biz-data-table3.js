import React from "react"
import JSONData from "../../content/2019-01-20-bbs.json"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Table, Button } from "react-bootstrap"

const JSONbuildbizdata = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <br />
    <Layout>
      <Container>
        <Link to="/">Go back to the homepage</Link> <br />
        <h1>Businesses for Sale</h1>
        {/* <h3>Source: {JSONData.title}</h3> */}
        <p>Click a column header button to sort by that column Asc/Desc:</p>
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
            {/* <tr> */}
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
            {/* </tr> */}
          </tbody>
        </Table>
      </Container>
    </Layout>
  </div>
)

export default JSONbuildbizdata
