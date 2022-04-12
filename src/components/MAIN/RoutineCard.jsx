import React, { useEffect, useRef } from 'react';

const RoutineCard = ({ routine, setCurentRoutine, setOpen }) => {
  const handleClick = () => {
    setCurentRoutine(routine);
    setOpen(true);
  };
  return (
    <div className="routineCard card text-center">
      <h4 className="card-title">RoutineImage goes here</h4>
      <div className="card-body">
        <p className="card-text">{routine.name}</p>
        <div onClick={handleClick} className="btn btn-primary">
          See Details
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
