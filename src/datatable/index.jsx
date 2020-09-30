import React from "react"
// import Layout from "../components/layout"
import { Container, Table } from "react-bootstrap"
// import { Container, Table, Button } from "react-bootstrap"

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0])
  return (
    // <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    //  <Layout>
    <Container>
      <Table responsive="md" striped bordered hover className="noWrap">
        <thead>
          <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              {columns.map(column => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    // </Layout>
    // </div>
  )
}

// // *** Below is before hacking at it
// export default function Datatable({ data }) {
//   const columns = data[0] && Object.keys(data[0])
//   return (
//     <table cellPadding={0} cellSpacing={0}>
//       <thead>
//         <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
//       </thead>
//       <tbody>
//         {data.map(row => (
//           <tr>
//             {columns.map(column => (
//               <td>{row[column]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }
