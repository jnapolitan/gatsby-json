import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi there.</h1>
    <p>Welcome to Modern Health.</p>
    <Link to="/programs/">Check out our programs</Link>
  </Layout>
)

export default IndexPage
