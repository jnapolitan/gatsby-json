import React, { Component } from "react";
import { toWords } from "number-to-words";
import capitalize from "capitalize";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "gatsby";
import programSectionStyles from "../styles/program-section.module.css";

export default class ProgramSection extends Component {
  allActivitiesComplete() {
    const { programId, order, activities } = this.props.section;
    const localStorageKeyPrefix = `${programId}${order}`;

    for (let activity = 1; activity <= activities.length; activity++) {
      const localStorageKey = `${localStorageKeyPrefix}${activity}`;
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
    const { order, programName, image, name } = this.props.section;
    const orderString = capitalize(toWords(order));

    return (
      <Link to={`/${programName}/part-${order}`}>
        <div className={programSectionStyles.container}>
          {this.markComplete()}
          <img src={image} alt={`${name}`} />
          <div>
            <p className={programSectionStyles.partText}>Part {orderString}</p>
            <h4>{name}</h4>
          </div>
        </div>
      </Link>
    )
  }
}
