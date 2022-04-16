import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postActivity } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const NewActivity = ({ openNewActivity, setOpenNewActivity }) => {
  const { token, allActivities, setAllActivities } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleHide = () => {
    setOpenNewActivity(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postActivity(name, description, token);
      if (response.error) {
        setIsError(true);
        setErrorMessage(response.message);
      } else {
        setOpenNewActivity(false);
      }
    } catch (error) {
      throw error;
    } finally {
      setName('');
      setDescription('');
    }
  };

  return (
    <Modal
      show={openNewActivity}
      onHide={handleHide}
      className="modalContainer"
    >
      <Modal.Header>
        <Modal.Title as="h3" className="ftHeader">
          New Activity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="newActivityModalBody">
        <form>
          <label htmlFor="username" className="ftBodyText">
            Name:{' '}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Activity Name"
            className="ftInputText ftInputBG ftInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description" className="ftBodyText">
            Description:{' '}
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            className="ftInputText ftInputBG ftInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="btn btn-outline-secondary" onClick={handleSubmit}>
            Submit
          </Button>
          {isError ? (
            <div className="newActErrorMessage">{`Please try again: ${errorMessage}`}</div>
          ) : null}
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

export default NewActivity;
