import React, { Component } from 'react';
import { toWords } from 'number-to-words';
import capitalize from 'capitalize';
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import { Link } from 'gatsby';
import programSectionStyles from '../styles/program-section.module.css';

export default class ProgramSection extends Component {
  constructor(props) {
    super(props);

    this.section = props.section;
    this.order = this.section.order;
    this.programId = this.section.programId;
    this.numActivities = this.section.activities.length;
  }

  allActivitiesComplete() {
    const localStorageKeyPrefix = `${this.programId}${this.order}`;
    for (let i = 1; i <= this.numActivities; i++) {
      const localStorageKey = `${localStorageKeyPrefix}${i}`;
      if (!localStorage.getItem(localStorageKey)) return false;
    }

    return true;
  }

  markComplete() {
    if (this.allActivitiesComplete()) {
      return <FaCheckSquare className={programSectionStyles.check} />
    }
  }

  render() {
    const orderString = capitalize(toWords(this.order));

    return (
      <Link to={`/programs/${this.programId}/${this.order}`}>
        <div className={programSectionStyles.container}>
          {this.markComplete()}
          <img src={this.section.image} alt={`${this.section.name}`} />
          <div>
            <p>Part {orderString}</p>
            <h4>{this.section.name}</h4>
          </div>
        </div>
      </Link>
    )
  }
}
