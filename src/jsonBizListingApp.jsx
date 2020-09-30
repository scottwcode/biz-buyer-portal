import React, { useState, useEffect } from "react"
import Datatable from "./datatable"
// import JSONData from "../content/2019-01-20-wsc.json"
// import JSONData from "./data/listing.json"
import JSONData from "./data/bbs-trimmed-50-less-columns.json"
// import Layout from "../components/layout"
// import { Container } from "react-bootstrap"
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
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <div>
        <h3>
          Filter by:{" "}
          <input type="text" value={q} onChange={e => setQ(e.target.value)} />
        </h3>{" "}
        <h4>Using the following checked fields:</h4>
        <p>
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
        </p>
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  )
}
