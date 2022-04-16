import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import NewActivity from './NewActivity';
import RoutinesWithActivitiesFlag from './RoutinesWithActivitiesFlag';
import useAuth from '../hooks/useAuth';
import { pubRoutinesWithActivity } from '../../api/fetch';

const Activities = ({ setCurrentRoutine, setOpen }) => {
  const [openNewActivity, setOpenNewActivity] = useState(false);
  const [toast, setToast] = useState(false);
  const [flag, setFlag] = useState(false);
  const [activID, setActivID] = useState(null);
  const [activRoutines, setActivRoutines] = useState([]);
  const { allActivities, user } = useAuth();

  useEffect(() => {
    const routByActiv = async () => {
      const data = await pubRoutinesWithActivity(activID);
      setActivRoutines(data);
      return;
    };
    routByActiv();

    if (toast) {
      setTimeout(() => {
        setFlag(true);
      }, 500);
    }
  }, [toast, activID]);

  return (
    <div className="activitiesContainer">
      <h4 className="ftHeader">Activities Center</h4>
      {user.username ? (
        <button
          className="btn btn-outline-secondary"
          onClick={() => setOpenNewActivity(true)}
        >
          Add New Activity
        </button>
      ) : null}

      {allActivities.map((activity, i) => {
        return (
          <ActivityCard
            activity={activity}
            toast={toast}
            setToast={setToast}
            setActivID={setActivID}
            openNewActivity={openNewActivity}
            key={`activity:${i}`}
          />
        );
      })}
      {openNewActivity && (
        <NewActivity
          openNewActivity={openNewActivity}
          setOpenNewActivity={setOpenNewActivity}
        />
      )}
      {flag ? (
        <RoutinesWithActivitiesFlag
          setFlag={setFlag}
          activRoutines={activRoutines}
          setOpen={setOpen}
          setCurrentRoutine={setCurrentRoutine}
        />
      ) : null}
    </div>
  );
};

export default Activities;
