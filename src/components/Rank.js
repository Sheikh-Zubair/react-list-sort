import React from 'react';

const Rank = ({rankSort}) => (
  <button className="btn btn-primary rank" name="rank" onClickCapture={rankSort}>Rank</button>
);

export default Rank;
