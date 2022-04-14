import React, { useState } from 'react';
import LoginButton from './Login_Button';
import NavBar from './NavBar';
import MyRoutines from './MyRoutines';
import CreateRoutine from './Create_Routine';
import Login from './Login';
import useAuth from '../hooks/useAuth';

const SideBar = ({ curentRoutine, setCurentRoutine, open, setOpen }) => {
  const { user } = useAuth();
  const [openLogin, setOpenLogin] = useState(false);
  const [openCreateRoutine, setOpenCreateRoutine] = useState(false);
  const [userRoutines, setUserRoutines] = useState([{}]);
  return (
    <div className="sideBarContainer d-flex flex-column flex-shrink-0 p-3 bg-light">
      <h1>{user.username ? `Hello, ${user.username}` : 'Please Log In'}</h1>
      <LoginButton openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <NavBar
        openCreateRoutine={openCreateRoutine}
        setOpenCreateRoutine={setOpenCreateRoutine}
      />
      <MyRoutines
        open={open}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        setOpen={setOpen}
        setCurentRoutine={setCurentRoutine}
        curentRoutine={curentRoutine}
      />
      {openLogin && <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />}
      {openCreateRoutine && (
        <CreateRoutine
          setOpenCreateRoutine={setOpenCreateRoutine}
          openCreateRoutine={openCreateRoutine}
          userRoutines={userRoutines}
          setUserRoutines={setUserRoutines}
        />
      )}
    </div>
  );
};

export default SideBar;
