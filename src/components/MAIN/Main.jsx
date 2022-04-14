import React, { useState } from 'react';
import Routines from './Routines';
import RoutineDetails from './Routine_Details';
import Activities from './Activities';
import { Routes, Route } from 'react-router-dom';

const Main = ({ curentRoutine, setCurentRoutine, open, setOpen }) => {
  return (
    <div className="main">
      <Routes>
        <Route
          path="*"
          element={
            <Routines setCurentRoutine={setCurentRoutine} setOpen={setOpen} />
          }
        ></Route>
        <Route
          path="/Routines"
          element={
            <Routines setCurentRoutine={setCurentRoutine} setOpen={setOpen} />
          }
        ></Route>
        <Route path="/Activities" element={<Activities />}></Route>
        {/* <Route
          path="/Routine_Details/"
          element={<RoutineDetails currentRoutine={curentRoutine} />}
        ></Route> */}
      </Routes>
      {open && (
        <RoutineDetails
          currentRoutine={curentRoutine}
          setOpen={setOpen}
          open={open}
        />
      )}
    </div>
  );
};

export default Main;
