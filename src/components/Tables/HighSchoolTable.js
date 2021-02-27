import React from 'react';
import Table from './Table/table.js';
const HighSchoolTable = (props) => {
  const headers = [
    "Pathway #",
    "Grade 9",
    <p>
      Summer
      <br />
      9-10
    </p>,
    "Grade 10",
    <p>
      Summer
      <br />
      10-11
    </p>,
    "Grade 11",
    <p>
      Summer
      <br />
      11-12
    </p>,
    "Grade 12",
  ];
  const tableValues = [
    [
      "Pathway 6 (Summer Geometry)",
      "Algebra 1",
      "Geometry (SFUSD)",
      "Algebra 2",
      "N/A",
      "Precalculus",
      "N/A",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ],
    [
      "Pathway 7 (Summer Algebra 2)",
      "Algebra 1",
      "N/A",
      "Geometry",
      "Algebra 2 (CCSF)",
      "Precalculus",
      "N/A",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ],
    [
      "Pathway 8 (Summer Precalculus)",
      "Algebra 1",
      "N/A",
      "Geometry",
      "N/A",
      "Algebra 2",
      "Precalculus (CCSF)",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ]
  ];

  return <Table headers={headers} values={tableValues} style={props.style}/>;
}
export default HighSchoolTable;
