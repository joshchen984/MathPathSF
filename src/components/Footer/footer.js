import React from "react"
import {Container} from 'react-bootstrap'
import classes from "./footer.module.scss";
const Footer = (props) => (
  <footer className={classes.Footer}>
      <Container fluid>
        {props.children}
      </Container>
  </footer>
);


export default Footer;
