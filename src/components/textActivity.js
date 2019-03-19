import React from "react";
import textActivityStyles from "../styles/textActivity.module.css";

export default props => {
  const { activity } = props;
  return (
    <>
      <p className={textActivityStyles.content}>{activity.content}</p>
    </>
  )
}