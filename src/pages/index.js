import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../containers/Layout/layout.js"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeButtons from "../components/HomeButtons/homeButtons.js"
import { Row, Col } from "react-bootstrap"
const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query ImageQuery {
      flowchart: file(relativePath: { eq: "flowchart.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="MathPathSF" />
      <div className="content" style={{ textAlign: "center" }}>
        <h1>
          Navigating Math in
          <br />
          San Francisco Public School
        </h1>
        <h4>A Guide to Getting to Calculus at SFUSD High Schools</h4>

        <p>
          <strong>
            Are you an SF public school student who loves math and is ready
            <br />
            for more challenging coursework?&nbsp;
            <br />
            <br />
            Are you interested in studying STEM (Science/Tech/Engineering/Math)
            in college?
            <br />
            <br />
            If your goal is to take Calculus class by senior year of high school
            but you aren’t sure how to get there, <br />
            you’ve come to the right place.
          </strong>
        </p>

        <p>
          Since SFUSD stopped offering Algebra in 8th grade, San Francisco
          public school families have been confused about how students can get
          to Calculus during high school. Our goal is to give you all of the
          information and resources you need to determine the best options for
          your math journey, while saving you time and stress in the process.
        </p>
        <HomeButtons />
      </div>
      <div style={{ width: "60%", margin: "auto" }}>
        <Row>
          <Col lg={12}>
            <Image data={images.flowchart} />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default IndexPage
