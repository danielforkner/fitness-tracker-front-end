import React, { useState, useEffect } from 'react';
import { getRoutines, getActivities } from '../../api/fetch';
import RoutineCard from './RoutineCard';

const Routines = ({ setCurentRoutine, setOpen }) => {
  const [pubRoutines, setPubRoutines] = useState([{}]);
  const [allActivities, setAllActivities] = useState([]);

  const fetchRoutines = async () => {
    const routines = await getRoutines();
    const activities = await getActivities();
    setPubRoutines(routines);
    setAllActivities(activities);
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
            allActivities={allActivities}
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
