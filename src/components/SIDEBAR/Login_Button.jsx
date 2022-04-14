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
    <div id="loginCard" className="col col-1 card" >
      <i class="NavIcon bi bi-person-lines-fill" onClick={handleClick}></i>
/* CHECK THIS MERGE
    <div className="logoutButton">
      {user.username ? (
        <div id="logOutBtn" className="btn btn-primary" onClick={logOut}>
          LOG OUT
        </div>
      ) : (
        <div id="loginBtn" className="btn btn-primary" onClick={logIn}>
          LOG IN
        </div>
      )}
 */
    </div>
  );
};

//----------------------------------------------------------------
export default Login_Button;
