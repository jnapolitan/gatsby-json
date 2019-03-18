import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  const section = data.section;

  return (
    <Layout>
      <h1>{section.name}</h1>
      <p>{section.description}</p>
      <div>
        {createBackLink(section)}
        {createContinueLink(section)}
      </div>
      <Link to="/programs">Back to all programs</Link>
    </Layout>
  )
}

const createBackLink = (section) => {
  const { order, programId } = section;

  if (order - 1 === 0) {
    return <Link to="/programs">Back to programs</Link>
  } else {
    return <Link to={`/programs/${programId}/${order - 1}`}>Back</Link>
  }
}

const createContinueLink = (section) => {
  const { order, programId, endOrder } = section;
  
  if (order === endOrder) {
    return <Link to="/programs">Finish</Link>
  } else {
    return <Link to={`/programs/${programId}/${order + 1}`}>Continue</Link>
  }
}

export const query = graphql`
  query($slug: String!) {
    section(fields: { slug: { eq: $slug } }) {
      programId
      name
      description
      order
      endOrder
      activities {
        type
        content
        prompt
        options
      }
    }
  }
`