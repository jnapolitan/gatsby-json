import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProgramsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the programs page</h1>
    <p>This is where programs will live</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProgramsPage;
