import React from 'react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activityCard card text-center">
      <h4 className="ftHeader card-title">{`${activity.name}`}</h4>
      <div className="ftBodyText card-body">
        <p className="ftBodyText card-text">{`Description: ${activity.description}`}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
