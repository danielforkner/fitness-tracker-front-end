import React from 'react';

const RoutineCard = ({ routine }) => {
  return (
    <div className="routineCard">
      <h4>Image goes here</h4>
      <p>{routine.name}</p>
    </div>
  );
};

export default RoutineCard;
