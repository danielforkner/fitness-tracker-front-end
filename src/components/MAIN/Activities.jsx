import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import NewActivity from './NewActivity';
import useAuth from '../hooks/useAuth';

const Activities = () => {
  const [openNewActivity, setOpenNewActivity] = useState(false);
  const { allActivities } = useAuth();
  return (
    <div className="activitiesContainer">
      <h4>Activities Container</h4>
      <button
        className="btn btn-secondary"
        onClick={() => setOpenNewActivity(true)}
      >
        Add New Activity
      </button>
      {allActivities.map((activity, i) => {
        return <ActivityCard activity={activity} key={`activity:${i}`} />;
      })}
      {openNewActivity && (
        <NewActivity
          openNewActivity={openNewActivity}
          setOpenNewActivity={setOpenNewActivity}
        />
      )}
    </div>
  );
};

export default Activities;
