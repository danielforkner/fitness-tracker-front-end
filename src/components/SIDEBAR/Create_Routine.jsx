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
  const [isPublic, setIsPublic] = useState(true);
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
        isPublic,
        token
      );
      userRoutines.push(response);
      setUserRoutines(userRoutines);
    } catch (error) {
      throw error;
    } finally {
      setGoalName('');
      setGoalDescription('');
      setOpenCreateRoutine(false);
    }
  };

  return (
    <Modal
      show={openCreateRoutine}
      onHide={handleHide}
      className="createRoutine ModalContainer"
    >
      <Modal.Header>
        <Modal.Title as="h3" className="ftHeader">Create New Routine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="createRoutine ftHeader ModalBody">
        <form>
          <label htmlFor="name">Goal Name: </label>
          <input
            type="text"
            name="name"
            className="ftHeader"
            placeholder="Ready for Summer...."
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            className="ftHeader"
            placeholder="Combination of cardio and strength"
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
          />

          <Button variant="btn btn-outline-secondary" onClick={handleSubmit}>
            Post your Routine!
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-outline-secondary" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRoutine;
