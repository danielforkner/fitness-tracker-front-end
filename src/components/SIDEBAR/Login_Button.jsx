import React from 'react';
//----------------------------------------------------------------
const Login_Button = ({ setOpenLogin }) => {
  const handleClick = () => {
    setOpenLogin(true);
  };

  return (
    <div id="loginBtn" className="btn btn-primary" onClick={handleClick}>
      LOGINBUTTOON
    </div>
  );
};

//----------------------------------------------------------------
export default Login_Button;
