import React from "react"
import JSONData from "../../content/2019-01-20-wsc.json"
import { Link } from "gatsby"

const JSONbuildbizdata = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <Link to="/">Go back to the homepage</Link> <br />
    <br />
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.content.map((data, index) => {
        return (
          <li key={`content_name_${index}`}>
            {data.name}, {data.asking_price}
          </li>
        )
      })}
    </ul>
  </div>
)

export default JSONbuildbizdata
