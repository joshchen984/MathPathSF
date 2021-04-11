import React from "react"
import Table from "./Table/table.js"
const EighthTable = props => {
  const headers = [
    "Pathway #",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ]
  const tableValues = [
    [
      "Pathway 5",
      "Algebra 1 (online or non-SFUSD school)",
      "Geometry",
      "Algebra 2",
      "Precalculus",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ],
  ]

  return <Table headers={headers} values={tableValues} style={props.style}/>
}
export default EighthTable
