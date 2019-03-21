import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { toWords } from "number-to-words";
import capitalize from "capitalize";
import Layout from "../components/layout";
import TextActivity from "../components/text-activity";
import QuestionActivity from "../components/question-activity";
import sectionStyles from "../styles/section.module.css";

export default class Section extends Component {
  constructor(props) {
    super(props);

    this.section = props.data.section;
    this.order = this.section.order;
    this.endOrder = this.section.endOrder;
    this.programId = this.section.programId;
    this.programName = this.section.programName;
    this.activities = this.section.activities;
    this.numActivities = this.section.activities.length;
  }

  createBackLink() {
    if (this.order - 1 === 0) {
      return <Link 
        className={sectionStyles.back} 
        to="/programs"
        >Back to programs
      </Link>
    } else {
      return <Link 
        className={sectionStyles.back} 
        to={`/programs/${this.programName}/part-${this.order - 1}`}
        >Back
      </Link>
    }
  }

  createContinueLink() {    
    if (this.order === this.endOrder) {
      return <Link className={sectionStyles.continue} to="/programs">Finish</Link>
    } else {
      return <Link 
        className={sectionStyles.continue} 
        to={`/programs/${this.programName}/part-${this.order + 1}`}
        >Continue
      </Link>
    }
  }

  render() {
    const orderString = capitalize(toWords(this.order));
    const activities = this.activities.map((activity, idx) => {
      if (activity.type === "Text") {
        return <TextActivity 
          activity={activity}
          programId={this.programId}
          sectionId={this.order}
          activityId={idx + 1} 
          key={`activity-${idx}`} 
        />
      } else if (activity.type === "Question") {
        return <QuestionActivity 
          activity={activity}
          programId={this.programId}
          sectionId={this.order}
          activityId={idx + 1} 
          key={`activity-${idx}`}
        />
      }
    });

    return (
      <Layout>
        <h3 className={sectionStyles.name}>
          {`Part ${orderString}: ${this.section.name}`}
        </h3>
        
        <div className={sectionStyles.content}>
          <p>{this.section.description}</p>
          <img src={this.section.image} alt={this.section.name} />
        </div>
        <h4>This section's activities:</h4>
        <div className={sectionStyles.activities}>
          { activities }
        </div>
        <div className={sectionStyles.buttons}>
          {this.createBackLink()}
          {this.createContinueLink()}
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