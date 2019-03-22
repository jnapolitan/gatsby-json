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
    const { order, storagePrefix, activities } = section;
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
          <div className={sectionStyles.activities}>
            <h3>Activities</h3>
          </div>
          <SectionActivities 
            storagePrefix={storagePrefix} 
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
      storagePrefix
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