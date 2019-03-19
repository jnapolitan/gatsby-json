import React from 'react';
import questionActivityStyles from "../styles/textActivity.module.css";

export default props => {
  const { activity } = props;
  return (
    <>
      <p className={questionActivityStyles.prompt}>{activity.prompt}</p>
    </>
  )
}