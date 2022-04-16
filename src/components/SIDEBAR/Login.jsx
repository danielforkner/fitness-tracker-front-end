import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { loginUser, registerUser } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const Login = ({ openLogin, setOpenLogin }) => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleHide = () => {
    setOpenLogin(false);
  };

  const handleSubmit = async (e) => {
    setIsError(false);
    e.preventDefault();
    try {
      if (isRegister) {
        const response = await registerUser(username, password);
        if (response.error) {
          setIsError(true);
          setErrorMessage(response.message);
        } else {
          localStorage.setItem('token', response.token);
          setToken(response.token);
          setIsRegister(false);
          setOpenLogin(false);
        }
      } else {
        const response = await loginUser(username, password);
        if (response.error) {
          setIsError(true);
          setErrorMessage(response.message);
        } else {
          localStorage.setItem('token', response.token);
          setToken(response.token);
          setOpenLogin(false);
        }
      }
    } catch (err) {
      throw err;
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <Modal
      show={openLogin}
      onHide={handleHide}
      className="loginModalContainer modalContainer"
    >
      <Modal.Header>
        <Modal.Title as="h3" className="ftHeader">
          {isRegister ? `Register` : `Login`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="loginModalBody">
        <form>
          <label htmlFor="username" className="ftBodyText">
            Username:{' '}
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username...."
            className="ftSubBodyText ftInputBG ftInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="ftBodyText">
            Password:{' '}
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="ftSubBodyText ftInputBG ftInput"
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
          {isError ? (
            <div className="loginErrorMessage">{`Please try again: ${errorMessage}`}</div>
          ) : null}
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
