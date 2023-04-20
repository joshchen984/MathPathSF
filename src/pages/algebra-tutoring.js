import React from "react"
import Layout from "../containers/Layout/layout.js"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

const Tutoring = props => {
  const images = useStaticQuery(graphql`
    query tutoringQuery {
      girl: file(relativePath: { eq: "math-girl.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Algebra Tutoring" description="" />
      <div className="content">
        <h2 style={{ textAlign: "center" }}>MathPathSF Presents:</h2>
        <h1>Online Drop-In Algebra Classes</h1>
        <p style={{ textAlign: "center" }}>
          <strong>Are you an SFUSD 8th Grader taking online Algebra?</strong>
          <br />
          <strong>
            Do you plan on taking the Math Validation Test to pass out of high
            school Algebra?
          </strong>
        </p>
        <Image
          data={images.girl}
          style={{ maxWidth: 500, margin: "auto", marginBottom: "1rem" }}
        />
        <p>
          San Francisco public school eighth graders that wish to start high
          school taking Geometry are required to complete an{" "}
          <Link to="/eighth-grade">
            online Algebra class and pass the Math Validation Test
          </Link>
          . In 2023, the MVT will be held on May 13th and August 19th. Students
          who don’t meet the cut-off score can retake the test in August. It
          will be held at a SFUSD high school and students are assigned an
          8:30am or 9:00am start time. Students are given four hours to complete
          the test though most finish in three hours.
        </p>
        <p>
          To help students prepare, MathPathSF will be offering free, virtual
          MVT test prep classes on <strong>Sunday, 4/30/23</strong>, at 10am and{" "}
          <strong>Saturday, 5/6/23</strong>, at 10am. Sessions will be taught by
          Lowell High School students. To register, please email
          mathpathsf@gmail.com. We will email registrants the practice test that
          will be reviewed and the Zoom link the day before the class.
        </p>
        <p>Questions? Email mathpathsf@gmail.com </p>
      </div>
    </Layout>
  )
}
export default Tutoring
