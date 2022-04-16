import React, { useState, useEffect } from 'react';
import { getRoutines, getActivities } from '../../api/fetch';
import RoutineCard from './RoutineCard';

const Routines = ({ setCurrentRoutine, setOpen }) => {
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
      <h4 className="ftHeader">Routines Center</h4>
      {pubRoutines.map((routine, i) => {
        return (
          <RoutineCard
            setCurrentRoutine={setCurrentRoutine}
            allActivities={allActivities}
            key={`routine:${i}`}
            routine={routine}
            setOpen={setOpen}
          />
        );
      })}
    </div>
  );
};

export default Routines;
