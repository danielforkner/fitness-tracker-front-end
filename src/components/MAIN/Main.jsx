import React from 'react';
import Routines from './Routines';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  
  return (
    <div className="main">
      <Routes>
      <Route path="*" element={< Routines />}> </Route>
      <Route path='/Routines' element={<Routines />}> </Route> 
      </Routes>
     
    </div>
  );
};

export default Main;
