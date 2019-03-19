import React from "react";
import { graphql, Link } from "gatsby";
import { toWords } from "number-to-words";
import capitalize from "capitalize";
import Layout from "../components/layout";
import sectionStyles from '../styles/section.module.css';

export default ({ data }) => {
  const section = data.section;
  const orderString = capitalize(toWords(section.order));

  return (
    <Layout>
      <h3 className={sectionStyles.name}>
        {`Part ${orderString}: ${section.name}`}
      </h3>
      <div className={sectionStyles.content}>
        <p>{section.description}</p>
        <img src={section.image} alt={section.name} />
      </div>
      <div className={sectionStyles.buttons}>
        {createBackLink(section)}
        {createContinueLink(section)}
      </div>
    </Layout>
  )
}

const createBackLink = (section) => {
  const { order, programId } = section;

  if (order - 1 === 0) {
    return <Link 
      className={sectionStyles.back} 
      to="/programs"
      >Back to programs
    </Link>
  } else {
    return <Link 
      className={sectionStyles.back} 
      to={`/programs/${programId}/${order - 1}`}
      >Back
    </Link>
  }
}

const createContinueLink = (section) => {
  const { order, programId, endOrder } = section;
  
  if (order === endOrder) {
    return <Link 
      className={sectionStyles.continue} 
      to="/programs"
      >Finish
    </Link>
  } else {
    return <Link 
      className={sectionStyles.continue} 
      to={`/programs/${programId}/${order + 1}`}
      >Continue
    </Link>
  }
}

export const query = graphql`
  query($slug: String!) {
    section(fields: { slug: { eq: $slug } }) {
      programId
      name
      description
      image
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