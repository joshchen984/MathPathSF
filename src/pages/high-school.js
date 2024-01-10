import Layout from "../containers/Layout/layout.js"
import SEO from "../components/seo"
import React from "react"
import { Link } from "gatsby"
import ImageHeadline from "../components/ImageHeadline/ImageHeadline.js"
import HighSchoolTable from "../components/Tables/HighSchoolTable.js"

const HighSchool = props => {
  return (
    <Layout>
      <SEO
        title="High School"
        description="Workarounds Paths to Calculus: High School. For students who ..."
      />
      <div className="content">
        <h1>Workarounds Paths to Calculus: High School</h1>
        <p>
          For students who take Algebra in 9th grade (without doubling up in
          Geometry), it is possible to get to Calculus senior year by taking a
          math class over the summer.{" "}
          <strong>
            However, if you plan on taking a class outside of SFUSD, be sure to
            get approval from your high school counselor as different high
            schools may have their own rules regarding requesting permission to
            take community college courses. Also be sure to confirm any
            information provided here in case things change.
          </strong>
        </p>
        <h4>
          Pathway #6) Summer After 9th Grade: SFUSD Summer School Geometry{" "}
        </h4>
        <p>
          <strong>SFUSD Summer Geometry: </strong>Freshman who have taken
          Algebra can apply to take a free, intensive six-week{" "}
          <a
            href="https://www.sfusd.edu/Intensive-Summer-Geometry"
            target="_blank"
            rel="noreferrer"
          >
            SFUSD Geometry course
          </a>{" "}
          over the summer. There are a limited number of spots so getting in is
          not guaranteed. It is usually held at an SF public high school.
          Students must attend every day.
          <strong> </strong>Since it is a SFUSD-sponsored class, there is no
          need to request special permission from your high school. The grade
          received in the summer course will count towards high school
          graduation and the grade will be included on your transcript.
        </p>
        <p>
          <strong>Summer Geometry Online or at Community College: </strong> If
          you don’t get a spot for the SFUSD Summer Geometry class, you could
          also take a online Geometry course at one of the online schools listed
          on the <Link to="/eighth-grade">8th Grade Algebra page</Link>, or any
          online/in-person class listed on this{" "}
          <a href="https://hs-articulation.ucop.edu/agcourselist">
            UC website of approved classes
          </a>
          . You could also take it at a community college such as College of San
          Mateo or Skyline.
        </p>
        <h4>
          Pathways #7 and #8) Summers After 10th &amp; 11th Grades: Algebra 2
          and Precalculus
        </h4>
        <p>
          Math classes can be taken over the summer at City College of San
          Francisco (CCSF) after sophomore year, as high school students need
          120 credits before they can become a dual-credit student. As high
          school classes are 5 credits per semester, this is the equivalent of
          completing 24 semesters of class, or essentially completing sophomore
          year. You would need to register as a dual-credit student at CCSF in
          order for the class to be listed on your high school
          transcript.&nbsp;For more info on CCSF dual credit,{" "}
          <a
            href="https://www.ccsf.edu/apply-ccsf/steps-apply-credit-high-school-student "
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
          .
        </p>
        <p>
          <strong>Summer After 10th Grade-Algebra 2: </strong>Sophomores who
          completed Geometry can request to take Algebra 2 over the summer at
          CCSF or another approved community college. At CCSF, the equivalent
          class is Math 60-Intermediate Algebra.
        </p>
        <p>
          <strong>Summer After 11th Grade-Precalculus: </strong>Juniors can
          request to take Precalculus at CCSF (or another community college)
          over the summer. At CCSF, the student would need to take both Math
          90-Precalculus Algebra and Math 95-Trigonometry.&nbsp;{" "}
        </p>

        <ImageHeadline>Workarounds to Calculus: High School</ImageHeadline>
        <HighSchoolTable />
        <p style={{ fontSize: "0.9rem" }}>
          Note: Students need to request permission from their high school
          counselor to ensure community college or any non-SFUSD classes will
          count as high school credit and/or allow the student to move onto the
          next level math class. as different high schools may have their own
          rules regarding requesting permission to take community college
          courses.
        </p>
      </div>
    </Layout>
  )
}
export default HighSchool
