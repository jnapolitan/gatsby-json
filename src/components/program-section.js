import React, { Component } from "react";
import { toWords } from "number-to-words";
import { titleCase, kebabCase } from "change-case";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "gatsby";
import programSectionStyles from "../styles/program-section.module.css";

export default class ProgramSection extends Component {
  allActivitiesComplete() {
    const { storagePrefix, activities } = this.props.section;

    for (let activity = 1; activity <= activities.length; activity++) {
      const localStorageKey = `${storagePrefix}${activity}`;
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
    const orderString = titleCase(toWords(order));

    return (
      <Link to={`/${kebabCase(programName)}/part-${order}`}>
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
