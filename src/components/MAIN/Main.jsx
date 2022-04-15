import React, { useState } from 'react';
import Routines from './Routines';
import RoutineDetails from './Routine_Details';
import Activities from './Activities';
import { Routes, Route } from 'react-router-dom';

const Main = ({ currentRoutine, setCurrentRoutine, open, setOpen }) => {
  return (
    <div className="main">
      <Routes>
        <Route
          path="*"
          element={
            <Routines setCurrentRoutine={setCurrentRoutine} setOpen={setOpen} />
          }
        ></Route>
        <Route
          path="/Routines"
          element={
            <Routines setCurrentRoutine={setCurrentRoutine} setOpen={setOpen} />
          }
        ></Route>

        <Route path="/Activities" element={<Activities />}></Route>
      </Routes>
      {open && (
        <RoutineDetails
          setCurrentRoutine={setCurrentRoutine}
          currentRoutine={currentRoutine}
          setOpen={setOpen}
          open={open}
        />
      )}
    </div>
  );
};

export default Main;
