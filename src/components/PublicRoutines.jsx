import React, { useState } from 'react';
import RoutineCard from './RoutineCard';

const PublicRoutines = () => {
  const [routines, setRoutines] = useState([
    { name: 'My Routine' },
    { name: 'Chest Day' },
    { name: 'Back Day' },
    { name: 'Leg Day' },
    { name: 'Cardio Blast' },
    { name: 'Swim Laps' },
    { name: 'Mountain Training' },
    { name: 'Cheat Day / Ice Cream' },
  ]);
  return (
    <div className="publicRoutinesContainer">
      {routines.map((routine, i) => {
        return <RoutineCard routine={routine} />;
      })}
    </div>
  );
};

export default PublicRoutines;
