import Layout from "../containers/Layout/layout.js"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials/testimonials.js"
import React from "react"
const About = props => {
  return (
    <Layout>
      <SEO
        title="About"
        description="When I started my freshman year at Lowell High School in San ..."
      />
      <div className="content">
        <h1>About</h1>
        <p>
          MathPathSF is a student-run organization dedicated to empowering
          students to navigate math advancement within the San Francisco public
          school district (SFUSD).
        </p>
        <p>
          It was founded in 2021 to support students who were stressing out
          about how to take Calculus before graduating high school. Each year,
          freshman with this goal meet with their counselors and ask to double
          up in Algebra and Geometry even if it means giving up a language class
          or band, but most are not able to as there are not enough spots. Most
          are also not aware that it is possible to pass out of Algebra by
          taking an online class in eighth grade, yet kids who attended private
          school are able to enroll in Geometry as freshmen since their schools
          taught eighth-grade Algebra.
        </p>
        <p>
          While we do not believe that taking advanced math classes is necessary
          for everyone, we want to inform students about the different ways to
          advance in math and be able to take Calculus in an SFUSD high school
          if that is your goal. We hope this site makes the process more
          transparent and easy to understand so students are aware of what’s
          possible and can decide what’s best for their education.
        </p>
      </div>
      <Testimonials />
    </Layout>
  )
}
export default About
