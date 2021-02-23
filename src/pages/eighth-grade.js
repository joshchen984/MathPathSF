import React from "react"
import Layout from "../components/Layout/layout.js"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import ListItem from "../components/ListItem.js"
import Image from "../components/image"
import ImageHeadline from "../components/ImageHeadline/ImageHeadline.js"

const Eighth = props => {
  const images = useStaticQuery(graphql`
    query EighthGradeImages {
      file(relativePath: { eq: "eighth-grade.png" }) {
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
      <SEO
        title="8th Grade Algebra"
        description="Workaround Path to Calculus: 8th Grade Algebra. In addition to ..."
      />
      <div className="content">
        <h1>
          Workaround Path to Calculus: <br />
          8th Grade Algebra
        </h1>
        <p>
          In addition to the SFUSD-recommended sequences where students take all
          of their math classes at their high school, there are several other
          workaround paths to reach Calculus that involve taking classes outside
          of school. A popular one is taking an online Algebra class in 8th
          grade.&nbsp;
        </p>
        <p>
          SFUSD automatically places all 9th graders in Algebra 1, but there are
          two ways to take Algebra in 8th grade instead and enroll in Geometry
          as a freshman. Then your sequence would be Algebra 2 in 10th grade,
          Precalculus in 11th grade, and Calculus in 12th grade. In case
          anything changes, however, please be sure to confirm any information
          you read here with your school or the district.{" "}
        </p>
        <p>
          <strong>Option 1)</strong>{" "}
          <strong>Attend a private middle school or a public school </strong>
          <span style={{ textDecoration: "underline" }}>
            <strong>outside</strong>
          </span>
          <strong> of SFUSD</strong>. In 8th grade, take Algebra 1 and get a
          grade of C or higher, then pass the{" "}
          <a
            href="http://www.sfusdmath.org/math-validation-test.html"
            target="_blank"
            rel="noreferrer"
          >
            SFUSD Math Validation Test
          </a>{" "}
          (MVT). This option doesn’t apply to 8th graders that attend SFUSD
          middle schools.
        </p>
        <p>
          <strong>Option 2)</strong> Take an approved Algebra class online.
          During 8th grade and/or over the summer between 8th-9th grade, take a
          full-year Algebra 1<strong> </strong>course from a UC-approved online
          school with a grade of C or higher, and then pass the SFUSD Math
          Validation Test (MVT).&nbsp;You can search for UC-approved classes on{" "}
          <a href="https://hs-articulation.ucop.edu/agcourselist">
            this website
          </a>
          , but most SF students take one of the following:
        </p>
        <p>
          <strong>Approved Online Algebra Courses</strong>
        </p>
        <ul>
          <ListItem
            title="BYU Independent School."
            link="https://is.byu.edu/catalog"
          >
            {" "}
            Course Title: Algebra 1, Part 1 &amp; 2 (Teacher Led, ALG 051 &amp;
            0531). Cost: $270/semester. Only the “Teacher-Led” class is
            approved.
          </ListItem>
          <ListItem
            title="APEX Virtual Learning School."
            link="https://www.apexlearningvs.com/course-catalog/"
          >
            {" "}
            Course Title: Algebra 1, Semester 1 &amp; 2 (non-honors). Cost:
            $350/semester. Be sure to register for the regular (non-honors)
            Algebra 1 course, as that is the UC-approved course. APEX
            occasionally emails $50 off coupons so sign up to receive their
            emails if you’re interested.&nbsp;
          </ListItem>
          <ListItem
            title="UC Scout - University of California."
            link="https://www.ucscout.org/courses"
          >
            {" "}
            Course Title: Algebra 1 (Core On-Demand), Semester 1 &amp; 2
            (ALGI141 &amp; 142). Cost: $399/semester. Only the “Core On-Demand”
            classes are approved. Their classes have set start and end dates.
            For instance, a semester may run from mid-August to mid-January and
            while students can start anytime and go at their own pace, they have
            to finish the class by the official end date.&nbsp;
          </ListItem>
        </ul>
        <p>
          I took the APEX class in 8th grade since that’s the only class my
          parents had heard about, but lots of kids also take BYU since it’s a
          little cheaper. I started the class in October, finished at the end of
          April, and took the MVT in May. Based on my experience, I spent around
          1 or 2 hours of reading and on homework each week. You go at your own
          pace, so sometimes I would skip a week if I was busy and other times,
          such as during Winter Break, I got through a lot of units. Also while
          I didn’t talk to the teacher since I was able to get help by googling
          or asking my parents, other kids have found emailing the teacher or
          going to office hours helpful.
        </p>
        <p>A couple of other things you should know:</p>
        <ul>
          <li>
            <p>
              Both semesters must be completed in order to be eligible for the
              MVT, but they’re the same price whether you register for one
              semester at a time or for the full year. So I recommend just
              paying for the first semester, in case you change your mind about
              taking the second.{" "}
            </p>
          </li>
          <li>
            <p>
              BYU and UC Scout require the final exam to be proctored in person.
              That means you would arrange to take the test at one of their
              testing locations (Sylvan Learning, for example) and pay a fee.
              Note: During COVID-19, they are allowing tests to be taken at home
              using an online proctoring system.
            </p>
          </li>
          <li>
            <p>
              Students don’t receive official school credit for any classes
              taken before 9th grade, so the online/non-SFUSD Algebra class will
              not be listed on your middle or high school transcript.&nbsp;So
              while it’s possible take even other online classes like Geometry
              during middle school, SFUSD would still make you take Geometry
              class in high school.{" "}
            </p>
          </li>
          <li>
            <p>
              Even if you learn algebra on your own by reading a book or using
              Khan Academy, for instance, this does not make you eligible for
              the MVT. You must take an approved, full-year class and receive a
              C grade or higher.
            </p>
          </li>
        </ul>
        <strong style={{ textAlign: "center" }}>
          Math Validation Test (MVT)
        </strong>
        <p>
          In addition to the Algebra class, you have to pass the SFUSD Math
          Validation Test in order to pass out of Algebra.&nbsp;
        </p>
        <p>
          The MVT test is typically held twice, in May and August. To register
          for the test, you need to have finished the first semester of Algebra
          and be enrolled or done with the second semester class.&nbsp;
        </p>
        <p>
          For details on upcoming MVT dates and how to register,{" "}
          <a
            href="http://www.sfusdmath.org/math-validation-test.html"
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
          . To see a previous test and answer key,{" "}
          <a
            href="http://www.sfusdmath.org/previous-mvt-administrations.html"
            target="_blank"
            rel="noreferrer"
          >
            click here.
          </a>
        </p>
        <ImageHeadline>
          Workaround Sequence to Calculus: 8th Grade Algebra
        </ImageHeadline>
        <Image data={images.file} />
      </div>
    </Layout>
  )
}
export default Eighth
