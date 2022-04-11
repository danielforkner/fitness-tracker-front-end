import React from 'react';
import {Link} from 'react-router-dom'

const RoutineCard = ({ routine }) => {
  return (
    <div className="routineCard card text-center">
      <h4 className="card-title">RoutineImage goes here</h4>
      <div className="card-body"> HELLO 
      <p className="card-text">{routine.name}</p>
      <Link to="/Routines" className="btn btn-primary"> Go Someplace</Link>
      </div> 
    </div>
  );
};

export default RoutineCard;
