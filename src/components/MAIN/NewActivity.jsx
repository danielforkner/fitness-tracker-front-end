import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postActivity } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const NewActivity = ({ openNewActivity, setOpenNewActivity }) => {
  const { token } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleHide = () => {
    setOpenNewActivity(false);
  };

  const handleSubmit = async () => {
    const response = await postActivity(name, description, token);
    console.log('New Activity Response ln15 newactivity.jsx', response);
  };

  return (
    <Modal
      show={openNewActivity}
      onHide={handleHide}
      className="newActivityModalContainer"
    >
      <Modal.Header>
        <Modal.Title as="h3">New Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body className="newActivityModalBody">
        <form>
          <label htmlFor="username">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Activity Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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

export default NewActivity;
