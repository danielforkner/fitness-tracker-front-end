import React, { useState } from 'react';
import { editRoutineActivity } from '../../../api/fetch';
import useAuth from '../../hooks/useAuth';

const EditRoutineActivityForm = ({
  activity,
  id,
  setEditActivity,
  currentRoutine,
  setCurrentRoutine,
}) => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const { token } = useAuth();

  const handleSubmitEditActivity = async (e) => {
    e.preventDefault();
    const response = await editRoutineActivity(id, count, duration, token);
    if (response.error) {
      console.error(response.error);
    } else {
      currentRoutine.activities.forEach((activity) => {
        if (activity.id === response.activityId) {
          activity.count = count;
          activity.duration = duration;
        }
      });
      console.log('AFTER', currentRoutine);
      setCurrentRoutine(currentRoutine);
      setEditActivity(false);
    }
  };
  return (
    <form className="form-horizontal">
      <label htmlFor="count">New Count: </label>
      <input
        name="count"
        value={count}
        className="ftSubBodyText ftInputBG ftInput"
        onChange={(e) => setCount(e.target.value)}
      ></input>
      <label htmlFor="duration">Duration: </label>
      <input
        name="duration"
        value={duration}
        className="ftSubBodyText ftInputBG ftInput"
        onChange={(e) => setDuration(e.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleSubmitEditActivity}
      >
        Edit
      </button>
    </form>
  );
};

export default EditRoutineActivityForm;
