import React, { useState } from 'react';
import LoginButton from './Login_Button';
import NavBar from './NavBar';
import MyRoutines from './MyRoutines';
import Login from './Login';

const SideBar = ({curentRoutine, setCurentRoutine, open, setOpen}) => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="sideBarContainer d-flex flex-column flex-shrink-0 p-3 bg-light">
      <h1>SIDEBAR COMPONENT</h1>
      <LoginButton openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <NavBar />
      <MyRoutines open={open} setOpen={setOpen} setCurentRoutine={setCurentRoutine} curentRoutine={curentRoutine}/>
      {openLogin && <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />}
    </div>
  );
};

export default SideBar;
