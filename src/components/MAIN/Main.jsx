import React, { useState } from 'react';
import Routines from './Routines';
import RoutineDetails from './Routine_Details';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  const [curentRoutine, setCurentRoutine] = useState({});
  return (
    <div className="main">
      <Routes>
        <Route path="*" element={<Routines />}></Route>
        <Route
          path="/Routines"
          element={<Routines setCurentRoutine={setCurentRoutine} />}
        ></Route>
        <Route
          path="/Routine_Details/"
          element={<RoutineDetails currentRoutine={curentRoutine} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;
