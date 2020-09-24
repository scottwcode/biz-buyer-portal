// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import { Link } from "gatsby"

// export default ({ data }) => {
//   console.log(data)
//   return (
//     <Layout>
//       <div>
//         <Link to="/">Go back to the homepage</Link> <br />
//         <h1>JSON File Contents</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>relativePath</th>
//               <th>content</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.allFile.edges.map(({ node }, index) => (
//               <tr key={index}>
//                 <td>{node.relativePath}</td>
//                 <td>{node.internal.content}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allFile(filter: { relativePath: { eq: "2019-01-20-wsc.json" } }) {
//       edges {
//         node {
//           relativePath
//           internal {
//             content
//           }
//         }
//       }
//     }
//   }
// `
