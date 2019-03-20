import React, { Component } from "react";
import textActivityStyles from "../styles/text-activity.module.css";

export default class TextActivity extends Component {
  constructor(props) {
    super(props);

    const { programId, sectionId, activityId } = this.props;
    this.localStorageKey = `${programId}${sectionId}${activityId}`;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const localStorageVal = this.getLocalStorageVal();
    
    if (localStorageVal === 'false' || localStorageVal === null) {
      localStorage.setItem(this.localStorageKey, 'true');
    } else {
      localStorage.setItem(this.localStorageKey, 'false');
    }

    this.forceUpdate();
  }

  getLocalStorageVal() {
    return localStorage.getItem(this.localStorageKey);
  }

  render() {
    const { activity } = this.props;
    const localStorageVal = this.getLocalStorageVal();
    const completedClass = localStorageVal === 'true' ? `${textActivityStyles.completed}` : "";

    return (
      <div>
        <p className={textActivityStyles.content}>{activity.content}</p>
        <button 
          className={`${textActivityStyles.activityButton} ${completedClass}`}
          onClick={this.handleClick}
          >Mark as read
        </button>
      </div>
    )
  }
}