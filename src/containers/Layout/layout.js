import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "fontsource-lato"
import Header from "../../components/Header/header.js"
import Popup from "../../components/Popup/Popup.js"
import Footer from "../../components/Footer/footer.js"
import { Container } from "react-bootstrap"
import "./layout.scss"
const Layout = ({ children }) => {
  const [showPopup, changeShowPopup] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // useEffect(() => {
  //   const now = new Date()
  //   const expTime = localStorage.getItem("popup")
  //   if (expTime === null || parseInt(expTime) < now.getTime()) {
  //     //expiration time is one hour
  //     localStorage.setItem("popup", (now.getTime() + 3600000).toString())
  //     changeShowPopup(true)
  //   } else {
  //     changeShowPopup(false)
  //   }
  // }, [])

  const closePopup = () => {
    changeShowPopup(false)
  }

  const popup = showPopup ? (
    <Popup closePopup={closePopup}>
      2021 registration for SFUSD's Summer School Geometry class is open! For
      details, click <Link to="/high-school">here</Link>.
    </Popup>
  ) : null
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {popup}
        <Container fluid>{children}</Container>
      </main>
      <Footer>
        <i>
          Copyright © 2021 MathPathSF. All Rights Reserved. No portion of this
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
        </i>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
