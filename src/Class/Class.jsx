import React from 'react';
import './Class.scss';

export const Class = ({ type }) => {
  return (
    <button type="button" className="class">{type}</button>
  );
};
