import React, { useState } from 'react';
import RoutineCard from './RoutineCard';

const Routines = () => {
  const [pubRoutines, setPubRoutines] = useState([
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
    <div className="routinesContainer">
      <h4>Routines Container</h4>
      {pubRoutines.map((routine, i) => {
        return <RoutineCard routine={routine} />;
      })}
    </div>
  );
};

export default Routines;
