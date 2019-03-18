import React from "react";
import { Link, graphql } from "gatsby";
import Program from '../components/program';
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProgramsPage = ({ data }) => {
  const programs = data.allProgramsJson.edges.map((program, idx) => (
    <Program program={program} key={`program-${idx}`} />
  ));

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Program Overview</h1>
      { programs }
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProgramsPage;

export const query = graphql`
{
  allProgramsJson {
    edges {
      node {
        id
        name
        description
        sections {
          programId
          order
          name
          image
        }
      }
    }
  }
}
`