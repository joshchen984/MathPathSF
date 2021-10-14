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
          . Factor in that these students are also researching and applying to
          high schools, this can seem overwhelming. But it doesn’t have to.
        </p>
        <p>
          To help out, MathPathSF.com is offering free algebra tutoring and test
          prep online. Our drop-in sessions will be held via Zoom on Thursdays
          at 5pm (with occasional exceptions). These classes are an easy way to
          ask questions and get homework help, and students may come to every
          session or drop-in as needed. The classes will run through May 2022,
          with an emphasis on Math Validation Test prep in April and May.
          Sessions will be run by Lowell High School student volunteers, most of
          whom took Algebra in 8th grade through BYU or Apex Learning.
        </p>
        <p>
          To sign up and get the Zoom link, please fill out{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7CJ2MD3Y1WVNIeLRMwCpC1CxOniyq14h60unSIeWdf33I3Q/viewform?usp=pp_url">
            this form
          </a>
          . Registrants will also have access to a private Facebook group where
          they can reach out to the teachers and post questions.{" "}
        </p>
        <p>Questions? Email mathpathsf@gmail.com </p>
      </div>
    </Layout>
  )
}
export default Tutoring
