import React, { useState } from 'react';
import Routines from './Routines';
import RoutineDetails from './Routine_Details';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  const [curentRoutine, setCurentRoutine] = useState({});
  const [open, setOpen] = useState(false);

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
