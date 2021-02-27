import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout.js"
import SEO from "../components/seo"
import ImageHeadline from "../components/ImageHeadline/ImageHeadline.js"
import SfusdTable from "../components/Tables/SfusdTable.js"

const RecommendedPathways = () => {
  return (
    <Layout>
      <SEO
        title="SFUSD-Recommended Math Pathways"
        description="SFUSD-Recommended Math Pathways. Starting with the ..."
      />
      <div className="content">
        <h1>SFUSD-Recommended Math Pathways</h1>
        <p>
          Starting with the 2014-15 school year, the San Francisco Unified
          School District (SFUSD) no longer offered 8th graders the option to
          take Algebra 1. For more details, you can check out the{" "}
          <a href="http://www.sfusdmath.org/secondary-course-sequence.html">
            SFUSD Math Department website
          </a>{" "}
          and read the many articles that have been written about the change
          including those in{" "}
          <a
            href="https://priceonomics.com/why-did-san-francisco-schools-stop-teaching/"
            target="_blank"
            rel="noreferrer"
          >
            Priceconomics
          </a>
          ,{" "}
          <a
            href="https://www.sfchronicle.com/education/article/SF-schools-move-to-delay-algebra-shows-13518860.php"
            target="_blank"
            rel="noreferrer"
          >
            SF Chronicle
          </a>
          ,{" "}
          <a
            href="https://www.kqed.org/news/10610214/san-francisco-middle-schools-no-longer-teaching-algebra-1"
            target="_blank"
            rel="noreferrer"
          >
            KQED
          </a>
          , and{" "}
          <a
            href="https://www.thebaycitybeacon.com/politics/squaring-the-circle-eighth-grade-algebra-and-the-2018-school-board-race/article_5baaac8e-cb2c-11e8-b048-dbcd72b52bba.html"
            target="_blank"
            rel="noreferrer"
          >
            Bay City Beacon
          </a>
          .
        </p>
        <p>
          The current high school 4-year math sequence now starts with Algebra
          in 9th grade and ends with Precalculus (or AP Statistics) in 12th
          grade. For students who want to take Calculus by senior year, however,
          there are other routes you can take. Since researching and
          understanding all the options can be quite confusing, I have listed
          and described them here on this site. These alternate sequences may
          require extra effort, some luck (to get into certain classes), and
          coordination with your high school counselor, but I hope this site
          helps you find the best path for you!
        </p>
        <h4>
          Pathway #1) SFUSD Traditional Math Sequence - Gets to Precalculus
        </h4>
        <p>
          In the current math sequence, high school freshmen (9th grade) are
          enrolled in Algebra (unless they already took it at a non-SFUSD school
          and passed the Math Validation Test). Students would then take
          Geometry in 10th grade/sophomore year, Algebra 2 in 11th grade, and
          Precalculus and/or AP Statistics in 12th. In this sequence, students
          do not get to Calculus by senior year.
        </p>
        <h4>Pathway #2) SFUSD Compression Course - Gets to Calculus</h4>
        <p>
          The other SFUSD-recommended option, which very few students choose, is
          to take a “compression” class in 11th grade that squeezes two years of
          math--Algebra 2 and Precalculus--into one year. This would allow you
          to take Calculus during senior year. The downside is that it moves
          quickly and skips over some concepts so students have to learn those
          on their own, especially if they plan on taking Calculus BC. Also,
          SFUSD doesn’t recognize this class as honors (since the UC’s don’t) so
          your grade will not be weighted in your GPA.
        </p>
        <h4>Pathways #3 &amp; #4) Doubling Up - Gets to Calculus</h4>
        <p>
          Two other ways to get to Calculus, while taking all of your math
          classes at school, is by doubling up freshman year (taking Algebra 1
          and Geometry concurrently) or sophomore year (taking Geometry and
          Algebra 2 concurrently). You need to request permission from your
          school, however, and there aren’t enough spots for everyone who asks
          to double up as priority for freshman Geometry enrollment goes to
          those who already completed Algebra 1 and passed the MVT. But even
          though the{" "}
          <a href="http://www.sfusdmath.org/high-school-pathways.html">
            SFUSD website
          </a>{" "}
          lists doubling up as one of their recommended sequences, I have heard
          from students at SOTA, Washington, and Wallenberg high schools that
          this was not available an option. So be sure to check with your high
          school.{" "}
        </p>
        <p>
          However, some kids who double up may struggle with the workload of
          taking an additional math class on top of adjusting to high school. I
          would only recommend it if you’re pretty strong in math. In my
          Geometry class, I saw some students get frustrated when the homework
          required knowing some concepts they still hadn’t learned in their
          Algebra class. In addition, by doubling up you miss the opportunity of
          enrolling in other elective classes such as band, orchestra or art
          since there won’t be room in your schedule.
        </p>
        <p>
          If you are unable to double up at school, an alternative option (if
          your high school allows it) is to take a UC-approved Geometry/Algebra
          2 class online. You can search for classes on this{" "}
          <a href="https://hs-articulation.ucop.edu/agcourselist">UC website</a>
          , though most students use one of the{" "}
          <Link to="/eighth-grade">three online schools</Link> I recommended for
          8th grade Algebra. Before registering, be sure to ask your high school
          counselor for approval!
        </p>
        <h4>Summary</h4>
        <p>
          Below you’ll find a chart summarizing the recommended math sequences
          for students who plan to take all their math classes at their SFUSD
          high school.&nbsp; To learn about alternative methods for reaching
          Calculus by senior year, including taking online Algebra in 8th grade,
          visit the Workaround Pathways to Calculus section.
        </p>
        <p>
          Please make sure to confirm any information you read with your school
          principal/counselor as each high school has different class offerings
          (some may not offer Calculus BC, for instance) and rules regarding
          doubling up.
        </p>
        <ImageHeadline sub="(All Classes Taken at School)">
          SFUSD Recommended Math Sequences
        </ImageHeadline>
        <SfusdTable />
        <p style={{ fontSize: "0.9rem" }}>
          Notes: Not all of the 11th-12th grade classes listed are offered at
          all SFUSD high schools--call the school or check their course catalog
          online. Precalculus is available as an an honors class; Algebra 1
          &amp; 2, Geometry and Compression are non-honors. Calculus AB and BC
          are both AP classes but BC is a more rigorous class since it covers
          the same content plus additional math concepts.
        </p>
      </div>
    </Layout>
  )
}

export default RecommendedPathways
