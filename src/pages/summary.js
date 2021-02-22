import Layout from '../components/Layout/layout.js'
import SEO from "../components/seo"
import React from 'react'
import {graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

const Summary = (props) => {
  const images = useStaticQuery(graphql`
  query SummaryQuery{
    flowchart: file(relativePath: { eq: "flowchart.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sfusdImage: file(relativePath: { eq: "sfusd-pathways.png"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    summer: file(relativePath: { eq: "summer.png"}) {
      childImageSharp{
        fluid(maxHeight: 1000, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
  return (
    <Layout>
      <SEO title="Summary" description="SFUSD Math Sequences Pathways #1-4: All Classes ..."/>
      <div className="content">
        <h1>Summary of SFUSD Math Paths</h1>
        <Image data={images.flowchart} style={{margin: "40px 0"}}/>
        <p style={{textAlign: "center"}}>
        <strong>SFUSD Math Sequences</strong> <br/>
        <em>Pathways #1-4: All Classes Taken at School<br/>Pathways #5-8: Workarounds to Calculus</em>
        </p>
        <Image data={images.sfusdImage} style={{"marginBottom": "40px"}}/>
        <Image data={images.summer}/>
      </div>
    </Layout>
  );
}
export default Summary;