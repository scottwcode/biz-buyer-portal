import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
// import { Container, Table, Button } from "react-bootstrap"

// // new code \/
// import ReactDOM from "react-dom"
// import App from "../app"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <Container>
//       <h1>Businesses for Sale</h1>
//       {/* // ReactDOM.render( */}
//       {/* <React.StrictMode> */}
//       <App />
//       {/* </React.StrictMode> */}, document.getElementById("root")
//       {/* // ) */}
//     </Container>
//     <br />
//     <br />
//     <Link to="/listing-table/">GraphQL Query - JSON - Biz Listings</Link>
//     <br />
//     <br />
//     <Link to="/graphql-firestore-biz-listings/">
//       GraphQL Query - Firestore - Biz Listings
//     </Link>
//     <br />
//     <br />
//     <Link to="/json-biz-data-table1/">JSON Data - Table1 page</Link>
//     <br />
//     <br />
//     <Link to="/json-biz-data-table2/">JSON Data - Table2 page</Link>
//     <br />
//     <br />
//     <Link to="/graphql-firestore-biz-datatable/">
//       GraphQL Query - Firestore - Datatable
//     </Link>
//     <br />
//   </Layout>
// )
// // new code ^

// // Commented out all of the below for testing datatable
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
    <br />
    <Link to="/listing-table/">GraphQL Query - JSON - Biz Listings</Link>
    <br />
    <br />
    <Link to="/graphql-firestore-biz-listings/">
      GraphQL Query - Firestore - Biz Listings
    </Link>
    {/* <br />
    <br />
    <Link to="/graphql-firestore-bands/">
      GraphQL Query - Firestore - Bands
    </Link>
    <br />
    <br />
    <Link to="/graphql-site-files/">
      GraphQL Query - This Site's data files
    </Link> */}
    <br />
    <br />
    <Link to="/json-biz-data-table1/">JSON Data - Biz Table1 page</Link>
    <br />
    <br />
    <Link to="/json-biz-data-table2/">JSON Data - Biz Table2 page</Link>
    <br />
    <br />
    <Link to="/graphql-firestore-biz-datatable/">
      GraphQL Query - Firestore - Datatable
    </Link>
    <br />
    <br />
    <Link to="/json-biz-datatable/">JSON Data - Biz Datatable page</Link>
    <br />
  </Layout>
)

export default IndexPage
