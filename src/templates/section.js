import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { toWords } from "number-to-words";
import capitalize from "capitalize";
import Layout from "../components/layout";
import SectionActivities from "../components/section-activities";
import sectionStyles from "../styles/section.module.css";

export default class Section extends Component {
  
  renderBackLink() {
    const { programName, order } = this.props.data.section;
    let link;

    if (order - 1 === 0) {
      link = "/programs";
    } else {
      link = `/programs/${programName}/part-${order - 1}`;
    }

    return <Link className={sectionStyles.back} to={link}>Back</Link>
  }

  renderContinueLink() {
    const { programName, order, endOrder } = this.props.data.section;
    let link;

    if (order === endOrder) {
      link = "/programs";
    } else {
      link = `/programs/${programName}/part-${order + 1}`
    }

    return <Link className={sectionStyles.continue} to={link}>Continue</Link>
  }

  render() {
    const { section } = this.props.data;
    const { order, programId, activities } = section;
    const orderString = capitalize(toWords(order));
    

    return (
      <Layout>
        <div className={sectionStyles.container}>
          <h3 className={sectionStyles.name}>
            {`Part ${orderString}: ${section.name}`}
          </h3>
          <div className={sectionStyles.content}>
            <p>{section.description}</p>
            <img src={section.image} alt={section.name} />
          </div>
          <SectionActivities 
            programId={programId} 
            activities={activities} 
            order={order} 
          />
          <div className={sectionStyles.buttons}>
            {this.renderBackLink()}
            {this.renderContinueLink()}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    section(fields: { slug: { eq: $slug } }) {
      programId
      programName
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