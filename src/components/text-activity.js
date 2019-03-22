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

  renderButton() {
    const isRead = this.getLocalStorageVal();
    console.log(this.getLocalStorageVal());
    let classes, buttonText;

    if (isRead === "read") {
      classes = `${textActivityStyles.activityButton} ${textActivityStyles.read}`;
      buttonText = "Mark unread";
    } else {
      classes = `${textActivityStyles.activityButton}`;
      buttonText = "Mark read";
    }

    return <button 
      className={classes} 
      onClick={this.handleClick}>{buttonText}
    </button>;
  }

  render() {
    const { activity } = this.props;
    const html = {__html: `${activity.content}`}

    return (
      <div>
        <div 
          className={textActivityStyles.content} 
          dangerouslySetInnerHTML={html} 
        />
        {this.renderButton()}
      </div>
    )
  }
}