import React from 'react';
import Section from './section';

export default props => {
  const { program } = props;
  const sections = program.sections.map((section, i) => (
    <Section section={section} id={i} />
  ))

  return (
    <>
      <h3>{program.name}</h3>
      <p>{program.description}</p>
      { sections }
    </>
  )
}
