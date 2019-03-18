import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";

export default ({ data }) => {
  const section = data.section;
  return (
    <Layout>
      <div>
        <h1>{section.name}</h1>
        <p>{section.description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String!) {
    section(fields: { slug: { eq: $slug } }) {
      name
      description
    }
  }
`