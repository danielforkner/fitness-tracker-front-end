import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavBar = ({ setOpenCreateRoutine }) => {
  const [isActivities, setIsActivities] = useState(false);
  const { user } = useAuth();

  return (
    <div className="NavBarCountainer nav nav-pills flex-column mb-auto col col-2">
      {user.username ? (
        <Link
          to="/"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Create New Routine"
          className="navIconLink"
          onClick={() => setOpenCreateRoutine(true)}
        >
          <i className="NavIcon ftIcon bi bi-node-plus"></i>
        </Link>
      ) : null}
      <Link
        to="/"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main2"
        onClick={() => setIsActivities(false)}
      >
        <i className="NavIcon ftIcon bi bi-grid-1x2-fill"></i>
      </Link>
      <Link
        to="/activities"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="aAtivities"
        onClick={() => setIsActivities(true)}
      >
        <i className="NavIcon ftIcon bi bi-fullscreen"></i>
      </Link>
    </div>
  );
};

export default NavBar;
