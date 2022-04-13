import React, { useState, useEffect } from 'react';
import { getRoutines } from '../../api/fetch';
import RoutineCard from './RoutineCard';

const Routines = ({ setCurentRoutine, setOpen }) => {
  const [pubRoutines, setPubRoutines] = useState([{}]);

  const fetchRoutines = async () => {
    const routines = await getRoutines();
    setPubRoutines(routines);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <div className="routinesContainer">
      <h4>Routines Container</h4>
      {pubRoutines.map((routine, i) => {
        return (
          <RoutineCard
            key={`routine:${i}`}
            routine={routine}
            setCurentRoutine={setCurentRoutine}
            setOpen={setOpen}
          />
        );
      })}
    </div>
  );
};

export default Routines;
