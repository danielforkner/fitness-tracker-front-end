import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import RoutineDetails from './Routine_Details';
import Routine_Details from './Routine_Details';

const RoutineCard = ({ routine, setCurentRoutine, setOpen }) => {
  const handleClick = () => {
    setCurentRoutine(routine)
    setOpen(true);
  };






  return (
    <div className="routineCard card text-center">
      <h4 className="card-title">RoutineImage goes here</h4>
      <div className="card-body">
        <p className="card-text">{routine.name}</p>
        <button
          onClick={handleClick}
         
          className="btn btn-primary"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default RoutineCard;
