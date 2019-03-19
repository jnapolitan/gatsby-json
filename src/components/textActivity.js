import React,  { Component } from "react";
import { FaCheckCircle } from 'react-icons/fa'
import textActivityStyles from "../styles/textActivity.module.css";

export default class TextActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  render() {
    const { activity } = this.props;

    return (
      <div className={textActivityStyles.container}>
        <span className={textActivityStyles.icon}>
          <FaCheckCircle />
        </span>
        <p className={textActivityStyles.content}>{activity.content}</p>
      </div>
    )
  }
}