import React, { Component } from "react";
import TextActivity from "../components/text-activity";
import QuestionActivity from "../components/question-activity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class SectionActivities extends Component {

  render() {
    const { programId, activities, order } = this.props;
    const textActivities = [];
    const questionActivities = [];

    activities.forEach((activity, idx) => {
      if (activity.type === "Text") {
        const textActivity = <TextActivity 
          activity={activity}
          programId={programId}
          sectionId={order}
          activityId={idx + 1} 
          key={`activity-${idx}`} 
        />

        textActivities.push(textActivity); 
      } else if (activity.type === "Question") {
        const questionActivity = <QuestionActivity 
          activity={activity}
          programId={programId}
          sectionId={order}
          activityId={idx + 1} 
          key={`activity-${idx}`}
        />

        questionActivities.push(questionActivity);
      }
    });

    return (
      <Tabs>
        <TabList>
          <Tab><h5>Readings</h5></Tab>
          <Tab><h5>Questions</h5></Tab>
        </TabList>

        <TabPanel>{textActivities}</TabPanel>
        <TabPanel>{questionActivities}</TabPanel>
      </Tabs>
    )
  }
}