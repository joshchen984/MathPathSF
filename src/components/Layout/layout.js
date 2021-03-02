import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "fontsource-lato"
import Header from "../Header/header.js"
import Footer from "../Footer/footer.js"
import { Container } from "react-bootstrap"
import "./layout.scss"
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
      <main>
        <Container fluid>{children}</Container>
      </main>
      <Footer>
        <i>
          Copyright © 2020 MathPathSF. All Rights Reserved. No portion of this
          website may be reproduced without my express written consent.
          <br />
          Learn how to send your questions, comments or suggestions{" "}
          <a
            href="https://github.com/joshchen984/MathPathSF/blob/master/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
          <br />
          Site made by Josh Chen
        </i>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
