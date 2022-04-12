import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Login = ({ openLogin, setOpenLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleHide = () => {
    setOpenLogin(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // CALL LOGIN FUNCTION FROM FETCH.JS
    setUsername('');
    setPassword('');
  };

  return (
    <Modal
      show={openLogin}
      onHide={handleHide}
      className="loginModalContainer"
      overlay
    >
      <Modal.Header>
        <Modal.Title as="h3">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <button style={{ margin: '10px 0' }} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondar" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
