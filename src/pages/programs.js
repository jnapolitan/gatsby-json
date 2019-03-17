import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProgramsPage = ({ data }) => {
  const { programs } = data.allDataJson.edges[0].node;
  console.log(programs);
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the programs page</h1>
      <p>This is where programs will live</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProgramsPage;

export const query = graphql`
{
  allDataJson {
    edges {
      node {
        programs {
          _1 {
            name
            description
          }
          _2 {
            name
            description
          }
        }
      }
    }
  }
}
`