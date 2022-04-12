import React from 'react';
//----------------------------------------------------------------
const Login_Button = ({ setOpenLogin }) => {
  const handleClick = () => {
    setOpenLogin(true);
  };

  return (
    <div className="btn btn-primary" onClick={handleClick}>
      LOGINBUTTOON
    </div>
  );
};

//----------------------------------------------------------------
export default Login_Button;
