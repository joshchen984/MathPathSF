import Layout from '../components/Layout/layout.js'
import SEO from "../components/seo"
import React from 'react'
const About = (props) => {
  return (
    <Layout>
      <SEO title="About"/>
      <div className="content">
        <h1>About</h1>
        <p>
        When I started my freshman year at Lowell High School in San Francisco, I was able to take Geometry after passing the Math Validation Test. My parents had heard from a friend that Algebra was no longer being offered in 8th grade so their son was taking an Algebra class online, and I did the same. But I quickly realized I was lucky to have had this opportunity. 
        </p>
        <br/>
        <p>
        Many of my new classmates who were interested in more challenging math courses were stressing out, meeting with their counselors and asking to double up in Algebra and Geometry even if it meant giving up band or a language class. But there weren’t enough spots for everyone. They didn’t know it was possible to pass out of Algebra in 8th grade and had never heard of the MVT test, or they found out too late to complete the class. Yet the kids who had come from private school were able to enroll in Geometry since they had had access to Algebra in 8th grade.  
        </p>
        <br/>
        <p>
        While I definitely don’t think taking advanced math classes is necessary for everyone, I felt bad that kids who wanted to were at a disadvantage and had to scramble to figure out their options just because they didn’t have the information. This led me to the idea of a website to inform people about the different ways to advance in math and take Calculus in a SFUSD high school. I hope this site makes the process more transparent and easy to understand so students are aware of what’s possible and can decide what’s best for their education.  
        </p>
      </div>
    </Layout>
  );
}
export default About;