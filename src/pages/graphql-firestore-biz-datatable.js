import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
// import { Table } from "react-bootstrap"
// import { node } from "prop-types"
// import { Button } from "react-bootstrap"

import BizApp from "../firestoreBizListingApp"

// // const BizListingPage = ({ data }) => {
const BizListingDatatablePage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Link to="/">Go back to the homepage</Link> <br />
      <h1>Businesses for Sale</h1>
      <BizApp />
    </Container>
    <br />
  </Layout>
)

export default BizListingDatatablePage
