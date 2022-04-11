import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBarCountainer nav nav-pills flex-column mb-auto">
      NAVBAR
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main"
      >
        <i className="NavIcon bi bi-node-plus">1</i>
      </Link>
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main2"
      >
        <i className="NavIcon bi bi-grid-1x2-fill">2</i>
      </Link>
      <Link
        to="/Main"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Main3"
      >
        <i className="NavIcon bi bi-fullscreen">3</i>
      </Link>
    </div>
  );
};

export default NavBar;
