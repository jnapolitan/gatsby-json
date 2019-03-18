import React from 'react';

import programStyles from '../styles/program.module.css';
import ProgramHeader from './program-header';
import ProgramSection from './program-section';

export default props => {
  const program = props.program.node;
  const sections = program.sections
    .map((section, idx) => (
      <ProgramSection section={section} key={`section-${idx}`} />
    ));

  const { name, description } = program;

  return (
    <div className={programStyles.container}>
      <ProgramHeader name={name} description={description} />
      <div className={programStyles.sections}>
        { sections }
      </div>
    </div>
  )
}
