import React from 'react';

const RoutineCard = ({ routine }) => {
  return (
    <div className="routineCard">
      <h4>{routine.name}</h4>
    </div>
  );
};

export default RoutineCard;
