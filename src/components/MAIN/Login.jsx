import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Login = ({ openLogin, setOpenLogin }) => {
  const handleHide = () => {
    setOpenLogin(false);
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
      <Modal.Body className="loginModalBody">
        <form>MY FORM</form>
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
