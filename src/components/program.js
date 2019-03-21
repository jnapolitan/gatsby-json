import React from 'react';
import ProgramHeader from './program-header';
import ProgramSection from './program-section';
import programStyles from '../styles/program.module.css';

export default props => {
  const { name, description, sections } = props.program.node;

  const allSections = sections.map((section, idx) => (
    <ProgramSection section={section} key={`section-${idx}`} />
  ));

  return (
    <div className={programStyles.container}>
      <ProgramHeader name={name} description={description} />
      <div className={programStyles.sections}>
        { allSections }
      </div>
    </div>
  )
}
