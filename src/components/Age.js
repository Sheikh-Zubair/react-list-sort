import React from 'react';

const Age = ({ageSort}) => (
  <button className="btn btn-primary age" name="age" onClickCapture={ageSort}>Age</button>
);

export default Age;
