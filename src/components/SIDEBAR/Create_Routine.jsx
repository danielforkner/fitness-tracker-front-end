import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createRoutine } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const CreateRoutine = ({
  openCreateRoutine,
  setOpenCreateRoutine,
  userRoutines,
  setUserRoutines,
}) => {
  const [goalName, setGoalName] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const { token } = useAuth();

  const handleHide = () => {
    setOpenCreateRoutine(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRoutine(
        goalName,
        goalDescription,
        true,
        token
      );
      userRoutines.push(response);
      setUserRoutines(userRoutines);
    } catch (error) {
      throw error;
    }
    setGoalName('');
    setGoalDescription('');
  };

  return (
    <Modal
      show={openCreateRoutine}
      onHide={handleHide}
      className="createRoutine ModalContainer"
    >
      <Modal.Header>
        <Modal.Title as="h3">Create New Routine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="createRoutine ModalBody">
        <form>
          <label htmlFor="name">Goal Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Ready for Summer...."
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Combination of cardio and strength"
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
          />

          <Button style={{ margin: '10px 0' }} onClick={handleSubmit}>
            Post your Routine!
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

export default CreateRoutine;
