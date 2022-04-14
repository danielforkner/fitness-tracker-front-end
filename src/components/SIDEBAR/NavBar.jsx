import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavBar = ({ setOpenCreateRoutine }) => {
  const { user } = useAuth();

  return (

    <div className="NavBarCountainer nav nav-pills flex-column mb-auto col col-2">

      NAVBAR
      {user.username ? (
        <button onClick={() => setOpenCreateRoutine(true)}>
          Create Routine
        </button>
      ) : null}
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main"
        className="navIconLink"
      >
        <i className="NavIcon bi bi-node-plus" ></i>
      </Link>
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main2"
      >
        <i className="NavIcon bi bi-grid-1x2-fill"></i>
      </Link>
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main3"
      >
        <i className="NavIcon bi bi-fullscreen"></i>
      </Link>
    </div>
  );
};

export default NavBar;
