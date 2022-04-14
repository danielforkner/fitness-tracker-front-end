import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBarCountainer nav nav-pills flex-column mb-auto col col-2">
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
