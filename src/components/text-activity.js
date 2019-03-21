import React, { Component } from "react";
import textActivityStyles from "../styles/text-activity.module.css";

export default class TextActivity extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getLocalStorageKey() {
    const { programId, sectionId, activityId } = this.props;
    return `${programId}${sectionId}${activityId}`;
  }

  getLocalStorageVal() {
    return localStorage.getItem(this.getLocalStorageKey());
  }

  handleClick() {
    const localStorageVal = this.getLocalStorageVal();
    
    if (!localStorageVal) {
      localStorage.setItem(this.getLocalStorageKey(), 'read');
    } else {
      localStorage.removeItem(this.getLocalStorageKey());
    }

    this.forceUpdate();
  }

  render() {
    const { activity } = this.props;
    const localStorageVal = this.getLocalStorageVal();
    const markRead = localStorageVal ? `${textActivityStyles.read}` : "";

    return (
      <div>
        <p className={textActivityStyles.content}>{activity.content}</p>
        <button 
          className={`${textActivityStyles.activityButton} ${markRead}`}
          onClick={this.handleClick}
        >
          Mark as read
        </button>
      </div>
    )
  }
}