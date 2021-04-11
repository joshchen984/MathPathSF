import React from 'react'
const ListItem = (props) => (
  <li>
    <p>
      <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a>
      {props.children}
    </p>    
  </li>
)
export default ListItem;
