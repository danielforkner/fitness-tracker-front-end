import React from 'react';
//----------------------------------------------------------------
const Login_Button = ({ setOpenLogin }) => {
  const handleClick = () => {
    setOpenLogin(true);
  };

  return (
    <div id="loginCard" className="col col-1 card" >
      <i class="NavIcon bi bi-person-lines-fill" onClick={handleClick}></i>
    </div>
  );
};

//----------------------------------------------------------------
export default Login_Button;
