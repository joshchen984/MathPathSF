import React from 'react';
import Table from './Table/table.js';
const SfusdTable = (props) => {
  const headers = [
    "Pathway #",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];
  const tableValues = [
    [
      "Pathway 1 (Gets to Precalculus)",
      "Math 8",
      "Algebra 1",
      "Geometry",
      "Algebra 2",
      <p>
        - Precalculus <br />- AP Statistics
      </p>,
    ],
    [
      "Pathway 2 (Compression Class)",
      "Math 8",
      "Algebra 1",
      "Geometry",
      "Algebra 2 + Precalculus Compression Class",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ],
    [
      "Pathway 3 (Doubling up 9th grade)",
      "Math 8",
      "Algebra 1 & Geometry (double up)",
      "Algebra 2",
      "Precalculus",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ],
    [
      "Pathway 4 (Doubling up 10th grade)",
      "Math 8",
      "Algebra 1",
      "Geometry & Algebra 2 (double up)",
      "Precalculus",
      <p>
        - AP Calculus <br />- AP Statistics
      </p>,
    ]
  ];
  return <Table headers={headers} values={tableValues} style={props.style}/>;
}
export default SfusdTable;
