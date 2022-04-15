import React from 'react';
import { deleteRoutine } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const RoutineCard = ({
  routine,
  setCurrentRoutine,
  setOpen,
  userRoutines,
  setUserRoutines,
}) => {
  const { user, token } = useAuth();
  const handleClick = () => {
    setCurrentRoutine(routine);
    setOpen(true);
  };
  const handleDelete = async () => {
    const response = await deleteRoutine(routine.id, token);
    if (response.error) {
      // show error to user
    } else {
      const updatedUserRoutines = userRoutines.filter((routine) => {
        return routine.id !== response.id;
      });
      setUserRoutines(updatedUserRoutines);
    }
  };
  return (
    <div className="routineCard card text-center">
      <h4 className="ftHeader card-title">{routine.name}</h4>
      <p>
        <em className="ftHeader">{`By ${routine.creatorName}`}</em>
      </p>
      <div className="card-body">
        <p className="ftBodyText card-text">{routine.goal}</p>
        <div onClick={handleClick} className="btn btn-outline-secondary">
          {user.username === routine.creatorName
            ? 'See Activities / Edit'
            : 'See Activities'}
        </div>
        {user.username ? (
          <div onClick={handleDelete} className="btn btn-outline-primary">
            Delete Routine
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RoutineCard;
