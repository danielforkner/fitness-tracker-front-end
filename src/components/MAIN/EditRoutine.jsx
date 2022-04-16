import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { editRoutine, getMyRoutines } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const EditRoutine = ({ routine, setIsEditRoutine, setUserRoutines }) => {
  const { user, token } = useAuth();
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async () => {
    try {
      const response = await editRoutine(routine.id, name, goal, token);
      if (response.error) {
        setIsError(true);
        setErrorMessage(response.message);
      } else {
        setIsEditRoutine(false);
        const updatedRoutines = await getMyRoutines(user.username, token);
        setUserRoutines(updatedRoutines);
      }
    } catch (error) {
      throw error;
    } finally {
      setName('');
      setGoal('');
    }
  };
  return (
    <form>
      <label htmlFor="name" className="ftBodyText">
        New Name:
      </label>
      <input
        type="text"
        name="name"
        className="ftInputText ftInputBG ftInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="goal" className="ftBodyText">
        Goal:
      </label>
      <input
        type="text"
        name="goal"
        className="ftInputText ftInputBG ftInput"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <Button style={{ margin: '10px 0' }} onClick={handleSubmit}>
        Submit
      </Button>
      {isError ? (
        <div className="loginErrorMessage">{`Please try again: ${errorMessage}`}</div>
      ) : null}
    </form>
  );
};

export default EditRoutine;
