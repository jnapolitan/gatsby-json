import React from 'react';

import ProgramHeader from './program-header';
import Section from './section';

export default props => {
  const { program } = props;
  const sections = program.sections
    .sort((a, b) => a.order - b.order)
    .map((section, i) => (
      <Section section={section} key={`section-${i}`} />
    ));

  return (
    <>
      <ProgramHeader program={program} />
      { sections }
    </>
  )
}
