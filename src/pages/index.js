import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Table } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Businesses for Sale</h1>
      <Table responsive="md" striped bordered hover className="noWrap">
        <thead>
          <tr>
            <th>Name</th>
            <th>Asking_Price</th>
            <th>Cash_Flow</th>
            <th>PE</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Health and Personal Care Amazon FBA eCommerce Retailer - Solid YOY
              Growth
            </td>
            <td>47000000</td>
            <td>8779435</td>
            <td>5.35</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
          <tr>
            <td>
              Social Media Driven eCommerce Retailer - Women's Fashion - All
              Sales on Branded Website - Massive Growth
            </td>
            <td>30000000</td>
            <td>870005</td>
            <td>4.22</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
          <tr>
            <td>
              Branded Amazon FBA Office Supplies and Kitchen Goods eCommerce
              Retailer
            </td>
            <td>3450000</td>
            <td>770785</td>
            <td>3.26</td>
            <th>Richmond</th>
            <th>VA</th>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Layout>
)

export default IndexPage
