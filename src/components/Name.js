import React from 'react';

const Name = ({nameSort}) => (
  <button className="btn btn-primary name" name="name" onClickCapture={nameSort}>Name</button>
);

export default Name;
