import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { getMyRoutines } from '../../api/fetch';
import RoutineCard from '../MAIN/RoutineCard';

//----------------------------------------------------------------
const MyRoutines = ({
  userRoutines,
  setUserRoutines,
  currentRoutine,
  setCurrentRoutine,
  open,
  setOpen,
}) => {
  //--------------------------------------------------------------------------------------------------------------------------------
  const { user, token, allActivities } = useAuth();

  //--------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const fetchUserRoutines = async () => {
      if (user.username) {
        const routines = await getMyRoutines(user.username, token);
        setUserRoutines(routines);
      }
    };
    fetchUserRoutines();
  }, [user]);
  //--------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="myRoutinesContainer">
      <h2 className="ftHeader">MY ROUTINES</h2>
      {user.username ? (
        <>
          {userRoutines.map((routine, i) => {
            return (
              <RoutineCard
                allActivities={allActivities}
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                key={`myRoutine:${i}`}
                routine={routine}
                setCurrentRoutine={setCurrentRoutine}
                setOpen={setOpen}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
};

//----------------------------------------------------------------
export default MyRoutines;
