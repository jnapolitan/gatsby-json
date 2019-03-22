import React from "react";
import { graphql } from "gatsby";
import Program from "../components/program";
import Layout from "../components/layout";
import indexStyles from "../styles/index.module.css";
import indexHeaderImage from "../images/index-header.png";

const Index = ({ data }) => {
  const programs = data.allProgramsJson.edges.map((program, idx) => (
    <Program program={program} key={`program-${idx}`} />
  ));

  return (
    <Layout>
      <div className={indexStyles.header}>
        <img src={indexHeaderImage} alt="hand-with-heart" />
        <div className={indexStyles.description}>
          <h2>Program Overview</h2>
          <p>Welcome to your Program Overview page. Here you'll find helpful 
            resources and activities to help you manage your mental well-being 
            so you can stay happy and healthy.
          </p>
        </div>
      </div>
      { programs }
    </Layout>
  )
}

export default Index;

export const query = graphql`
{
  allProgramsJson {
    edges {
      node {
        name
        description
        sections {
          storagePrefix
          numActivities
          programName
          order
          name
          image
        }
      }
    }
  }
}
`