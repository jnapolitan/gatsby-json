import React from 'react';
import { toWords } from 'number-to-words';
import capitalize from 'capitalize';
import { Link } from 'gatsby';
import programSectionStyles from '../styles/program-section.module.css';

export default props => {
  const { section } = props;
  const orderString = capitalize(toWords(section.order));

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