/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss";
import Header from "../Header/header.js";
import Footer from "../Footer/footer.js"
import {Container} from "react-bootstrap";
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main><Container fluid>{children}</Container></main>
      <Footer><i>Copyright © 2020 MathPathSF. All Rights Reserved. No portion of this website may be reproduced without my express written consent.<br/>Contact: info Send your questions, comments or suggestions to mathpathsf@gmail.com.</i></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
