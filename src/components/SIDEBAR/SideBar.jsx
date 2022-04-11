import React from 'react';
import LoginButton from './Login_Button';
import NavBar from './NavBar';
import MyRoutines from './MyRoutines';

const SideBar = () => {
  return (
    <div className="sideBarContainer d-flex flex-column flex-shrink-0 p-3 bg-light">
      <h1>SIDEBAR COMPONENT</h1>
      <LoginButton />
      <NavBar />
      <MyRoutines />

    </div>
  );
};

export default SideBar;
