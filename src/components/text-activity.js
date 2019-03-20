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
    
    if (!localStorageVal) {
      localStorage.setItem(this.localStorageKey, 'read');
    } else {
      localStorage.removeItem(this.localStorageKey);
    }

    this.forceUpdate();
  }

  getLocalStorageVal() {
    return localStorage.getItem(this.localStorageKey);
  }

  render() {
    const { activity } = this.props;
    const localStorageVal = this.getLocalStorageVal();
    const completedClass = localStorageVal ? `${textActivityStyles.read}` : "";

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