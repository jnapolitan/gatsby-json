import React from 'react';
import { toWords } from 'number-to-words';
import programSectionStyles from '../styles/program-section.module.css';

export default props => {
  const { section } = props;
  const partNumber = toWords(section.order + 1);
  const partText = partNumber.charAt(0).toUpperCase() + partNumber.slice(1);

  return (
    <div className={programSectionStyles.container}>
      <img src={section.image} alt={`${section.name}`} />
      <div>
        <p>Part {partText}</p>
        <h4>{section.name}</h4>
      </div>
    </div>
  )
}