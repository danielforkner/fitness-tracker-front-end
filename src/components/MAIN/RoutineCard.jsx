import React, { useEffect, useRef } from 'react';

const RoutineCard = ({ routine, setCurentRoutine, setOpen }) => {
  const handleClick = () => {
    setCurentRoutine(routine);
    setOpen(true);
  };
  return (
    <div className="routineCard card text-center">
      <h4 className="ftHeader card-title">{routine.name}</h4>
      <p>
        <em className="ftHeader">{`By ${routine.creatorName}`}</em>
      </p>
      <div className="card-body">
        <p className="ftBodyText card-text">{routine.goal}</p>
        <div onClick={handleClick} className="btn btn-outline-secondary">
          See Details
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
