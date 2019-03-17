import React from 'react';

export default props => {
  const { section } = props;
  return (
    <>
      <p>{section.name}</p>
      <img src={section.image} alt={`${section.name}`} />
    </>
  )
}