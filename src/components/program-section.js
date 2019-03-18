import React from 'react';
import { toWords } from 'number-to-words';
import { Link } from 'gatsby';
import programSectionStyles from '../styles/program-section.module.css';

export default props => {
  const { section } = props;
  const orderString = uppercase(toWords(section.order));

  return (
    <Link to={`/programs/${section.programId}/${section.order}`}>
      <div className={programSectionStyles.container}>
        <img src={section.image} alt={`${section.name}`} />
        <div>
          <p>Part {orderString}</p>
          <h4>{section.name}</h4>
        </div>
      </div>
    </Link>
  )
}

const uppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};