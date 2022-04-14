import React from 'react';
import useAuth from '../hooks/useAuth';
//----------------------------------------------------------------
const Login_Button = ({ setOpenLogin }) => {
  const { user, setToken } = useAuth();

  const logIn = () => {
    setOpenLogin(true);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div id="loginCard" className="col col-1 card">
      <i className="NavIcon bi bi-person-lines-fill"></i>
      <h1 className="ftHeader loginHeader card-title">
        {' '}
        {user.username ? `Hello, ${user.username}` : 'Please Log In'}
      </h1>
      {user.username ? (
        <div
          id="logOutBtn"
          className="loginButton ftIcon btn btn-outline-secondary"
          onClick={logOut}
        >
          LOG OUT
        </div>
      ) : (
        <div
          id="loginBtn"
          className="loginButton ftIcon btn btn-outline-secondary"
          onClick={logIn}
        >
          LOG IN
        </div>
      )}
    </div>
  );
};

//----------------------------------------------------------------
export default Login_Button;
