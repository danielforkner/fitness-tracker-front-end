import React from 'react';
import ActivityCard from './ActivityCard';
import useAuth from '../hooks/useAuth';

const Activities = () => {
  const { allActivities } = useAuth();
  return (
    <div className="activitiesContainer">
      <h4>Activities Container</h4>
      {allActivities.map((activity, i) => {
        return <ActivityCard activity={activity} key={`activity:${i}`} />;
      })}
    </div>
  );
};

export default Activities;
