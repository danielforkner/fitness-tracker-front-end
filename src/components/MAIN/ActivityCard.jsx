import React from 'react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activityCard card text-center">
      <h4 className="card-title">{`${activity.name}`}</h4>
      <div className="card-body">
        <p className="card-text">{`Description: ${activity.description}`}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
