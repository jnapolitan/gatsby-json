import React, { Component } from "react";
import textActivityStyles from "../styles/text-activity.module.css";

export default class TextActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };

    const { programId, sectionId, activityId } = this.props;
    this.localStorageKey = `${programId}${sectionId}${activityId}`;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const localStorageVal = localStorage.getItem(this.localStorageKey);
    const { completed } = this.state;
    
    if (localStorageVal === 'false' || localStorageVal === null) {
      localStorage.setItem(this.localStorageKey, 'true');
    } else {
      localStorage.setItem(this.localStorageKey, 'false');
    }

    this.setState({ completed: !completed });
  }

  render() {
    const { activity } = this.props;
    const localStorageVal = localStorage.getItem(this.localStorageKey);
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