import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getMyRoutines } from '../../api/fetch';

//----------------------------------------------------------------
const MyRoutines = ({
  userRoutines,
  setUserRoutines,
  curentRoutine,
  setCurentRoutine,
  open,
  setOpen,
}) => {
  //--------------------------------------------------------------------------------------------------------------------------------
  const { user, token } = useAuth();

  //--------------------------------------------------------------------------------------------------------------------------------
  const handleClick = (routine) => {
    // ??? handle
    setCurentRoutine(routine);
    setOpen(true);
  };
  //----------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchUserRoutines = async () => {
      if (user.username) {
        const routines = await getMyRoutines(user.username, token);
        setUserRoutines(routines);
        console.log(routines);
      }
    };
    fetchUserRoutines();
  }, [user]);
  //--------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="myRoutinesContainer">
      {user.username ? (
        <>
          {userRoutines.map((routine, i) => {
            return (
              <div
                className="routineCard card text-center"
                key={`MyRoutine:${i}`}
              >
                <h4 className="card-title">RoutineImage goes here</h4>
                <div className="card-body">
                  <p className="card-text">{routine.name}</p>
                  <div
                    onClick={() => handleClick(routine)}
                    className="btn btn-primary"
                  >
                    See Details
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

//----------------------------------------------------------------
export default MyRoutines;
