import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#e61a0b",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Meanwhile in Iran
        <br />
        <span style={headingAccentStyles}>—Under construction</span>
      </h1>
   
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
