import React, { Component } from "react";
import textActivityStyles from "../styles/text-activity.module.css";

export default class TextActivity extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getLocalStorageVal() {
    return localStorage.getItem(this.props.localStorageKey);
  }

  handleClick() {
    const { localStorageKey } = this.props;
    const localStorageVal = this.getLocalStorageVal();
    
    if (!localStorageVal) {
      localStorage.setItem(localStorageKey, "read");
    } else {
      localStorage.removeItem(localStorageKey);
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