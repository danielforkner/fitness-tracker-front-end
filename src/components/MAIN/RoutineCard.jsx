import React from 'react';
import { Link } from 'react-router-dom';
import Routine_Details from './Routine_Details';

const RoutineCard = ({ routine, setCurentRoutine }) => {
  const handleClick = () => {
    setCurentRoutine(routine);
  };

  return (
    <div className="routineCard card text-center">
      <h4 className="card-title">RoutineImage goes here</h4>
      <div className="card-body">
        <p className="card-text">{routine.name}</p>
        <Link
          to={`/Routine_Details/`}
          onClick={handleClick}
          className="btn btn-primary"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default RoutineCard;
