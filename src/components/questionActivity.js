import React from 'react';
import questionActivityStyles from "../styles/questionActivity.module.css";

export default props => {
  const { activity } = props;
  const options = activity.options.map((option, idx) => (
    <span key={`option-${idx}`} className={questionActivityStyles.option}>{option}</span>
  ))

  return (
    <>
      <h4 className={questionActivityStyles.prompt}>{activity.prompt}</h4>
      <div className={questionActivityStyles.options}>
        { options }
      </div>
    </>
  )
}