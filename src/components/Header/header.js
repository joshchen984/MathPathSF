import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import classes from "./header.module.scss";
const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="primary" fixed="top" variant="dark"expand="lg" className={classes.Navbar}>
      <Navbar.Brand as={Link} to="/" style={{color:"#e1710e", fontWeight: "bold"}}>{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse"/>
      <Navbar.Collapse id="navbarCollapse">
        <Nav as="ul" className="mr-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link"activeClassName="active">About</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/sfusd-pathways" className="nav-link"activeClassName="active">SFUSD-Recommended Math Pathways</Link>
          </Nav.Item>
          <NavDropdown title="Workaround Paths to Calculus">
            <NavDropdown.Item as={Link} to="/eighth-grade">8th Grade Algebra</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/high-school">High School</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item as="li">
            <Link to="/summary" className="nav-link"activeClassName="active">Summary</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
