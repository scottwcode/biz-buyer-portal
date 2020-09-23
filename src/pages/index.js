import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Table, Button } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Businesses for Sale</h1>
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
          <tr>
            <td>
              Health and Personal Care Amazon FBA eCommerce Retailer - Solid YOY
              Growth
            </td>
            <td>4,7000,000</td>
            <td>1,779,435</td>
            <td>5.35</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
          <tr>
            <td>
              Social Media Driven eCommerce Retailer - Women's Fashion - All
              Sales on Branded Website - Massive Growth
            </td>
            <td>3,000,000</td>
            <td>870,005</td>
            <td>4.22</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
          <tr>
            <td>
              Branded Amazon FBA Office Supplies and Kitchen Goods eCommerce
              Retailer
            </td>
            <td>450,000</td>
            <td>170,785</td>
            <td>3.26</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
        </tbody>
      </Table>
    </Container>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <br />
    {/* <Link to="/json-at-buildtime/">Go to json-at-buildtime page</Link> <br />
    <br /> */}
    {/* <Link to="/json-biz-data/">Go to json-biz-data page</Link>
    <br />
    <br /> */}
    <Link to="/json-biz-data-table1/">Go to 1 - json-biz-data-table1 page</Link>
    <br />
    <br />
    <Link to="/json-biz-data-table2/">Go to 2 - json-biz-data-table2 page</Link>
    <br />
    <br />
    <Link to="/json-biz-data-table3/">Go to 3 - json-biz-data-table3 page</Link>
    <br />
    <br />
    <Link to="/json-biz-data-table4/">Go to 4 - JSON File Contents</Link>
    <br />
    <br />
    <Link to="/graphql-site-files/">GraphQL Query - This Site's Files</Link>
    <br />
    <br />
    <Link to="/graphql-firestore-bands/">
      GraphQL Query - Firestore - Bands
    </Link>
    <br />
  </Layout>
)

export default IndexPage
