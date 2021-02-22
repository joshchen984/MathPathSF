import React from 'react'
import {Button} from "react-bootstrap"
import {Link} from 'gatsby';

const PageButton = (props) => (
  <Button as={Link} to={props.to} variant="primary" style={{padding:"10px"}}>{props.children}</Button>
)

export default PageButton;