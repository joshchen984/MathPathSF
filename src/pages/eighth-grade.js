import React from "react"
import Layout from "../containers/Layout/layout.js"
import SEO from "../components/seo"
import ListItem from "../components/ListItem.js"
import ImageHeadline from "../components/ImageHeadline/ImageHeadline.js"
import EighthTable from "../components/Tables/EighthTable.js"

const Eighth = props => {
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
            0531). Only the “Teacher-Led” class is approved.
          </ListItem>
          <ListItem
            title="APEX Virtual Learning School."
            link="https://www.apexlearningvs.com/course-catalog/"
          >
            {" "}
            Course Title: Algebra 1, Semester 1 &amp; 2 (non-honors). Be sure to
            register for the regular (non-honors) Algebra 1 course, as that is
            the UC-approved course.
          </ListItem>
          <ListItem
            title="UC Scout - University of California."
            link="https://www.ucscout.org/courses"
          >
            {" "}
            Course Title: Algebra 1 (Core On-Demand), Semester 1 &amp; 2
            (ALGI141 &amp; 142). Only the “Core On-Demand” classes are approved.
            Their classes have set start and end dates. For instance, a semester
            may run from mid-August to mid-January and while students can start
            anytime and go at their own pace, they have to finish the class by
            the official end date.&nbsp;
          </ListItem>
          <ListItem
            title="Silicon Valley High School."
            link="https://svhs.co/course-catalog/"
          >
            {" "}
            Course Title: Algebra 1, Part 1 & 2.
          </ListItem>
        </ul>
        <p>A few things to know:</p>
        <ul>
          <li>
            <p>
              Both semesters must be completed, but they’re the same price
              whether you register for one semester at a time or for the full
              year. So I recommend just paying for the first semester, in case
              you change your mind about taking the second.{" "}
            </p>
          </li>
          <li>
            <p>
              BYU and UC Scout require the final exam to be proctored in person.
              That means you would arrange to take the test at one of their
              testing locations (Sylvan Learning, for example) and pay a fee.
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
              You must take an approved, full-year class and receive a C grade
              or higher. Even if you learn algebra on your own by reading a book
              or using Khan Academy, for instance, you would not be eligible to
              take Geometry.
            </p>
          </li>
        </ul>
        <strong style={{ textAlign: "center" }}>
          Math Validation Test (MVT)
        </strong>
        <p>
          In addition to the Algebra class, you have to pass the SFUSD Math
          Validation Test in order to pass out of Algebra. In 2023, however,
          SFUSD removed the test requirement and it is unclear if it will be
          given in the future.
        </p>
        <p>
          The MVT test is typically held twice, in May and August. To register
          for the test, you need to have finished the first semester of Algebra
          and be enrolled or done with the second semester class.&nbsp;
        </p>
        <p>
          For more details on the MVT,{" "}
          <a href="https://www.sfusd.edu/mvt" target="_blank" rel="noreferrer">
            click here
          </a>
          .
        </p>
        <ImageHeadline>
          Workaround Sequence to Calculus: 8th Grade Algebra
        </ImageHeadline>
        <EighthTable />
      </div>
    </Layout>
  )
}
export default Eighth
