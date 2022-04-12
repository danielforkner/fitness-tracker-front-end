import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { loginUser, registerUser } from '../../api/fetch';

const Login = ({ openLogin, setOpenLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleHide = () => {
    setOpenLogin(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      const response = await registerUser(username, password);
      console.log(response);
      setIsRegister(false);
    } else {
      const response = await loginUser(username, password);
      console.log(response);
    }
    setUsername('');
    setPassword('');
  };

  return (
    <Modal show={openLogin} onHide={handleHide} className="loginModalContainer">
      <Modal.Header>
        <Modal.Title as="h3">{isRegister ? `Register` : `Login`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="loginModalBody">
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister ? null : (
            <Button
              style={{ margin: '10px 0' }}
              onClick={() => setIsRegister(true)}
            >
              Register New user
            </Button>
          )}
          <Button style={{ margin: '10px 0' }} onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
