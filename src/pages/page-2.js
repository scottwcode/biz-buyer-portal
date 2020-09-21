import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Table } from "react-bootstrap"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.datatables.net/1.10.19/css/datatables.bootstrap.min.css"
    />
    <Container>
      <h1>Businesses for Sale</h1>
      <Table
        responsive="md"
        striped
        bordered
        hover
        className="noWrap"
        mydatatable
      >
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
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script>$('.mydatatable').DataTable();</script>
  </Layout>
)

export default SecondPage
