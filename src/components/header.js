// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = ({ siteTitle }) => (
  <header className="bg-dark">
    {/* <Container> */}
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">More Features</Nav.Link>
          <NavDropdown title="Listings" id="collasible-nav-dropdown">
            <NavDropdown.Item href="listing-table">
              Biz Listing - GraphQL - JSON
            </NavDropdown.Item>
            <NavDropdown.Item href="graphql-firestore-biz-listings">
              Biz Listing - GraphQL - Firestore
            </NavDropdown.Item>
            <NavDropdown.Item href="json-biz-data-table1">
              Biz Listing - File System - JSON - File 1
            </NavDropdown.Item>
            <NavDropdown.Item href="json-biz-data-table2">
              Biz Listing - File System - JSON - File 2
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="graphql-firestore-bands">
              Band Listing - GraphQL - bands
            </NavDropdown.Item>
            <NavDropdown.Item href="graphql-site-files">
              Files - GraphQL - Data Files
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
