import React from 'react';

import programStyles from './program.module.css';
import ProgramHeader from './program-header';
import Section from './section';

export default props => {
  const program = props.program.node;
  const sections = program.sections
    .sort((a, b) => a.order - b.order)
    .map((section, i) => (
      <Section section={section} key={`section-${i}`} />
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
