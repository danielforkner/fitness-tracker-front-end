import React, { useState } from 'react';
import { useEffect } from 'react';
import { editActivity, pubRoutinesWithActivity } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const ActivityCard = ({ activity, toast, setToast, setActivID }) => {
  const [currentActivity, setCurrentActivity] = useState(activity);
  const [isEditActivity, setIsEditActivity] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { user, token } = useAuth();

  const handleSubmit = async () => {
    const response = await editActivity(activity.id, name, description, token);
    if (response.error) {
      // error messages come back liks so...
      // {error: 'You must be logged in to perform this action', name: 'MissingUserError', message: 'You must be logged in to perform this action'}
    } else {
      setCurrentActivity(response);
    }
    setIsEditActivity(false);
  };

  return (
    <div className="activityCard card text-center">
      <h4 className="ftHeader card-title">{`${currentActivity.name}`}</h4>
      <div className="ftBodyText card-body">
        <p className="ftBodyText card-text">{`Description: ${currentActivity.description}`}</p>
        <div
          className="btn btn-secondary"
          onClick={() => {
            setActivID(currentActivity.id);
            setToast(true);
          }}
        >
          Routines with this activity
        </div>
        {user.username ? (
          <button
            className="FtIcon btn btn-outline-secondary"
            onClick={() => setIsEditActivity(!isEditActivity)}
          >
            EDIT ACTIVITY
          </button>
        ) : null}
      </div>
      {isEditActivity ? (
        <div>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" className="ftBodyText">
              New Name:
              <input
                type="text"
                name="name"
                className="ftInputText ftInputBG ftInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="description" className="ftBodyText">
              New Description:
              <input
                type="text"
                className="ftInputText ftInputBG ftInput"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <div className="btn btn-secondary" onClick={handleSubmit}>
              Update
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ActivityCard;
