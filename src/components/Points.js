import React from 'react';

const Points = ({scoreSort}) => (
  <button className="btn btn-primary points" name="points" onClickCapture={scoreSort}>Points</button>
);

export default Points;
