import React from 'react'
import {Button} from "react-bootstrap"
import {Link} from 'gatsby';
import classes from "./PageButton.module.scss";
const PageButton = (props) => (
  <Button as={Link} to={props.to} variant="primary" className={classes.Button}>{props.children}</Button>
)

export default PageButton;