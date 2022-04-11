import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RoutineDetails = ({ currentRoutine }) => {
  const { activities } = currentRoutine;
  return (
    <div>
      <div>{currentRoutine.name}</div>
      <div>{currentRoutine.goal}</div>
      <div>{currentRoutine.creatorName}</div>
      <div>
        {activities.map((elem, i) => {
          return <div>{`${elem.name}, ${elem.count}, ${elem.duration}`}</div>;
        })}
      </div>
      <Link to="/Routines">Go Back</Link>
    </div>
  );
};

export default RoutineDetails;
