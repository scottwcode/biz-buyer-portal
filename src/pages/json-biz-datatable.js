import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
// import { Table } from "react-bootstrap"
// import { node } from "prop-types"
// import { Button } from "react-bootstrap"

// // Commented out the below to test datatable that was working
// // on index.js page
// const BizListingPage = ({ data }) => {
//   return (
//     <Layout>
//       <Container>
//         <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
//           <Link to="/">Go back to the homepage</Link> <br />
//           <h1>Biz Listings - default (state ASC, city DESC)</h1>
//           <p>Click a column header button to sort by that column Asc/Desc:</p>
//           <Table responsive="md" striped bordered hover className="noWrap">
//             <thead>
//               <th>
//                 <Link to="/graphql-firestore-biz-listings-name/">
//                   <Button variant="outline-primary">Biz Name</Button>{" "}
//                 </Link>
//               </th>
//               <th>
//                 <Link to="/graphql-firestore-biz-listings-ap/">
//                   <Button variant="outline-primary">Asking Price</Button>{" "}
//                 </Link>
//               </th>
//               <th>
//                 <Link to="/graphql-firestore-biz-/">
//                   <Button variant="outline-primary">City</Button>{" "}
//                 </Link>
//               </th>
//               <th>
//                 <Link to="/graphql-firestore-biz-datatable/">
//                   <Button variant="outline-primary">State</Button>{" "}
//                 </Link>
//               </th>
//               <th>
//                 <Link to="/graphql-firestore-biz-datatable/">
//                   <Button variant="outline-primary">Detail URL</Button>{" "}
//                 </Link>
//               </th>
//             </thead>
//             {data.allBizListing.edges.map(({ node, index }) => (
//               <tr>
//                 <td>{node.name}</td>
//                 <td>{node.asking_price}</td>
//                 {/* <td>{node.cash_flow}</td>
//                 <td>{node.pe}</td> */}
//                 <td>{node.city}</td>
//                 <td>{node.state}</td>
//                 <td>
//                   <Link to={`${node.detail_url}`}>click here for details</Link>
//                 </td>
//               </tr>
//             ))}
//           </Table>
//         </div>
//       </Container>
//     </Layout>
//   )
// }

// export default BizListingPage

// // filter: { state: { eq: "VA" } }

// export const query = graphql`
//   query {
//     allBizListing(sort: { fields: [state, city], order: [ASC, DESC] }) {
//       edges {
//         node {
//           name
//           asking_price
//           city
//           state
//         }
//       }
//     }
//   }
// `

// // new code \/
// import ReactDOM from "react-dom"
import BizApp from "../jsonBizListingApp"

// // const BizListingPage = ({ data }) => {
const jsonBizDatatablePage = () => (
  //   // const IndexPage = () => (
  <Layout>
    <SEO title="jsonBizDatatablePage" />
    <Container>
      <h1>Businesses for Sale</h1>
      <Link to="/">Go back to the homepage</Link> <br />
      {/* // ReactDOM.render( */}
      {/* <React.StrictMode> */}
      <BizApp />
      {/* </React.StrictMode> */}
      {/* , document.getElementById("root") */}
      {/* // ) */}
    </Container>
    <br />
  </Layout>
)
// // new code ^

export default jsonBizDatatablePage
