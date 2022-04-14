import React from 'react';
import ActivityCard from './ActivityCard';
import useAuth from '../hooks/useAuth';

const Activities = () => {
  const { allActivities } = useAuth();
  return (
    <div className="activitiesContainer">
      {allActivities.map((activity, i) => {
        return <ActivityCard activity={activity} key={`activity:${i}`} />;
      })}
    </div>
  );
};

export default Activities;
