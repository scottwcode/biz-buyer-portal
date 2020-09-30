import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Datatable from "./datatable"
// import JSONData from "../content/2019-01-20-wsc.json"
// import JSONData from "./data/listing.json"
import JSONData from "./data/bbs-trimmed-50-less-columns.json"

require("es6-promise").polyfill()
require("isomorphic-fetch")

export default function BizApp() {
  const [data, setData] = useState([])
  const [q, setQ] = useState("")
  const [searchColumns, setSearchColumns] = useState([
    "name",
    "asking_price",
    "city",
    "state",
  ])

  useEffect(() => {
    // setData(JSONData.content)
    setData(JSONData)
    // setData(data.allBizListing.edges)
    // setData(query.data.allBizListing.edges)
    // setData(query.allBizListing.edges.node)
  }, [])

  function search(rows) {
    return rows.filter(row =>
      searchColumns.some(
        column =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    )
  }

  const columns = data[0] && Object.keys(data[0])
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={e => setQ(e.target.value)} />
        {columns &&
          columns.map(column => (
            <label>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={e => {
                  const checked = searchColumns.includes(column)
                  setSearchColumns(prev =>
                    checked
                      ? prev.filter(sc => sc !== column)
                      : [...prev, column]
                  )
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allBizListing(sort: { fields: [state, city], order: [ASC, DESC] }) {
      edges {
        node {
          name
          asking_price
          city
          state
          detail_url
        }
      }
    }
  }
`
