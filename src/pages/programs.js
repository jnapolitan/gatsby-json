import React from "react";
import { Link, graphql } from "gatsby";
import Program from '../components/program';

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProgramsPage = ({ data }) => {
  const programData = Object.values(data.programsJson);
  const programs = programData.map((program, i) => (
    <Program program={program} key={`program-${i}`} />
  ));

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the programs page</h1>
      { programs }
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProgramsPage;

export const query = graphql`
{
  programsJson {
    _1 {
      name
      description
      sections {
        order
        name
        image
      }
    }
    _2 {
      name
      description
      sections {
        order
        name
        image
      }
    }
  }
}
`