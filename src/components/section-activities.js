import React from "react";
import TextActivity from "../components/text-activity";
import QuestionActivity from "../components/question-activity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default props => {
  const { storagePrefix, activities } = props;
  const textActivities = [];
  const questionActivities = [];
  const emptyText = <p>Nothing here for this section :)</p>

  activities.forEach((activity, idx) => {
    if (activity.type === "Text") {
      const textActivity = <TextActivity 
        activity={activity}
        localStorageKey={`${storagePrefix}${idx + 1}`}
        key={`activity-${idx}`} 
      />

      textActivities.push(textActivity); 

    } else if (activity.type === "Question") {
      const questionActivity = <QuestionActivity 
        activity={activity}
        localStorageKey={`${storagePrefix}${idx + 1}`}
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

      <TabPanel>
        {textActivities.length ? textActivities : emptyText}
      </TabPanel>
      <TabPanel>
        {questionActivities.length ? questionActivities : emptyText}
      </TabPanel>
    </Tabs>
  )
}
