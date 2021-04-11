import React from 'react'
import PropTypes from 'prop-types'
import classes from "./table.module.scss"
const Table = (props) => {
  const body = [];
  const headers = []
  const rows = props.values.length;
  const cols = props.values[0].length
  for(let j = 0; j < cols;j++){
    headers.push(
      <th key={j} className={classes.th}>
        {props.headers[j]}
      </th>
    )
  }
  
  let rowClass = "";
  for(let i = 0; i < rows;i++){
    const row = [];
    for(let j = 0; j < cols;j++){
      row.push(<td key={j} className={classes.td}>{props.values[i][j]}</td>);
    }
    if(i % 2 === 1){
      rowClass = classes.lightGray;
    }else{
      rowClass = classes.darkGray;
    }
    body.push(
      <tr key={i} className={rowClass}>
        {row}
      </tr>
    );
  }
  return (
    <table className={classes.Table} style={props.style}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        {body}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  values: PropTypes.arrayOf(PropTypes.array),
  headers: PropTypes.array
}
export default Table;
