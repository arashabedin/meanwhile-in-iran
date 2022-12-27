import * as React from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"
import Img from "gatsby-image"
import gitIcon from "../icons/git.png";
const pageStyles = {
  color: "#232129",
  padding: "20px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#000"
}
const headingStyles = {
  fontSize: 40,
  marginTop: 0,
  marginBottom: 40,
  maxWidth: 480,
  backgroundColor: '#fff',
  color: '#000',
  padding: '0 20px'
}
const subHeadingStyles = {
  fontSize: 24,
  marginTop: 0,
  marginBottom: 40,
  maxWidth: 500,
  // backgroundColor: '#fff',
  color: '#fff',
  padding: '0 20px',
  lineHeight: '34px'
}
const dayStyles = {
  backgroundColor: '#fff',
  color: '#000',
  padding: '0 5px',
  margin: '0 2px'
}
const imgStyles = {
  width: '100%',
  maxWidth: 630
}
const gitIconStyles = {
  width: 40,
  marginLeft:20
}
const gitLinkStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 40,
  color: "#fff"
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const edges = data?.allFile?.edges?.sort((a, b) => 0.5 - Math.random());
  const fromDate = new Date('2022-09-16');
  const current = new Date();
  const difference = current.getTime() - fromDate.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Meanwhile in Iran
        <br />
      </h1>
      <Link to="https://github.com/arashabedin/meanwhile-in-iran" style={gitLinkStyles} ><span>Collaborate on Git</span><img src={gitIcon} style={gitIconStyles} /></Link>
      <div style={subHeadingStyles}>
        All images have been captured in Iran during the recent <span style={dayStyles}>{totalDays}</span> days, in the ingoing revolution.
      </div>
      {edges.map((edge: any, index: number) => {
        return <Img style={imgStyles} key={index} fluid={edge.node.childImageSharp.fluid} alt={"Meanwhile in Iran - Women Life Freedom"} />
      })}
    </main>
  )
}

export default IndexPage
export const indexQuery = graphql`
query AssetsPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/images/"}}) {
    edges {
      node {
        id
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export const Head: HeadFC = () => <title>Meanwhile in Iran</title>
