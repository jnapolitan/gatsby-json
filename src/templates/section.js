import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { toWords } from "number-to-words";
import { titleCase } from 'change-case';
import capitalize from "capitalize";
import Layout from "../components/layout";
import SectionActivities from "../components/section-activities";
import sectionStyles from "../styles/section.module.css";

export default class Section extends Component {
  
  renderBackLink() {
    const { programName, order } = this.props.data.section;
    let link, buttonText;

    if (order - 1 === 0) {
      link = "/";
      buttonText = "Back to programs";
    } else {
      link = `/${programName}/part-${order - 1}`;
      buttonText = "Back";
    }

    return <Link className={sectionStyles.back} to={link}>{buttonText}</Link>
  }

  renderContinueLink() {
    const { programName, order, endOrder } = this.props.data.section;
    let link, buttonText;

    if (order === endOrder) {
      link = "/";
      buttonText = "Finish";
    } else {
      link = `/${programName}/part-${order + 1}`
      buttonText = "Continue";
    }

    return <Link className={sectionStyles.continue} to={link}>{buttonText}</Link>
  }

  render() {
    const { section } = this.props.data;
    const { order, programId, activities, programName } = section;
    const orderString = capitalize(toWords(order));
    

    return (
      <Layout>
        <div className={sectionStyles.container}>
          <div className={sectionStyles.header}>
            <Link to="/">⬅ Back to programs</Link>
            <h3 className={sectionStyles.name}>
              {`Part ${orderString}: ${section.name}`}
            </h3>
            <p>{titleCase(programName)}</p>
          </div>
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