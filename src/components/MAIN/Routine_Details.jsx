import { Dropdown } from 'bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { newRoutineActivityy, deleteRoutineActivity } from '../../api/fetch';
import useAuth from '../hooks/useAuth';

const RoutineDetails = ({
  setCurrentRoutine,
  currentRoutine,
  open,
  setOpen,
}) => {
  const { activities, id: routineId } = currentRoutine;
  const { user, allActivities, token } = useAuth();
  const [addActivity, setAddActivity] = useState(false);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [ourRoutine, setOurRoutine] = useState(false);

  // if user created the routine, render specific elements
  useEffect(() => {
    if (user.username === currentRoutine.creatorName) {
      setOurRoutine(true);
    }
  }, []);

  const handleHide = () => {
    setOpen(false);
  };

  const handleSubmitAddActivity = async (e) => {
    e.preventDefault();
    const result = await newRoutineActivityy(
      routineId,
      selectedActivity,
      count,
      duration
    );
  };

  const deleteActivity = async (activity) => {
    const response = await deleteRoutineActivity(
      activity.routineActivityId,
      token
    );
    console.log(response);
  };

  // in case fetch routines fails
  if (!currentRoutine.activities) {
    return (
      <Modal show={open} onHide={handleHide} className="routineModalContainer">
        No Data
      </Modal>
    );
  }
  return (
    <Modal show={open} onHide={handleHide} className="routineModalContainer">
      <Modal.Header>
        <Modal.Title as="h3">{currentRoutine.name}</Modal.Title>
        <p>
          <em>{`By ${currentRoutine.creatorName}`}</em>
        </p>
      </Modal.Header>
      <Modal.Body className="routineModalBody">
        <div>
          <div>{currentRoutine.goal}</div>
          <div>
            {activities.length > 0 ? `Activities:` : 'No Activities'}
            {activities.map((activity) => {
              return (
                <div className="activityCard" key={activity.id}>
                  <h4>{`${activity.name}`}</h4>
                  <p>{activity.description}</p>
                  <p>{`Count: ${activity.count} Duration: ${activity.duration}`}</p>
                  {ourRoutine ? (
                    <div
                      className="deleteActivityBtn"
                      onClick={() => deleteActivity(activity)}
                    >
                      DELETE
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {ourRoutine ? (
            <button
              onClick={() => {
                setAddActivity(!addActivity);
              }}
            >
              ADD ACTIVITY
            </button>
          ) : // https://reactjs.org/docs/forms.html#the-select-tag
          null}
          {addActivity ? (
            <form>
              <label htmlFor="activities">Activity Name: </label>
              <select
                name="activities"
                value={selectedActivity}
                onChange={(e) => {
                  setSelectedActivity(e.target.value);
                }}
              >
                {allActivities.map((activity) => {
                  return (
                    <option
                      value={activity.id}
                      key={`activityID:${activity.id}`}
                    >
                      {`${activity.name}`}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="count">Count: </label>
              <input
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              ></input>
              <label htmlFor="duration">Duration: </label>
              <input
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              ></input>
              <button type="submit" onClick={handleSubmitAddActivity}>
                ADD
              </button>
            </form>
          ) : null}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoutineDetails;

// const [container, setContainer] = useState(null);
// const newWindow = useRef(window);

// const RoutineDetailsDiv = () => {
// return (
// <div>
// <div>{currentRoutine.name}</div>
// <div>{currentRoutine.goal}</div>
// <div>{currentRoutine.creatorName}</div>
// <div>
//   {activities.map((activity, i) => {
//     return <div>{`${activity.name}, ${activity.count}, ${activity.duration}`}</div>;
//   })}
// </div>
// <Link to="/Routines">Go Back</Link>
// </div>
// );
//  }

// useEffect(() => {
//   <RoutineDetailsDiv />
//   setContainer( <RoutineDetailsDiv />);
// }, []);

// useEffect(() => {
//   if (container) {
//     newWindow.current = window.open(
//       "",
//       "",
//       "width=800,height=800,left=200,top=200"
//     );
//     newWindow.current.document.body.appendChild(container);
//     const curWindow = newWindow.current;
//     return () => curWindow.close();
//   }
// }, [container]);

// render() {
// return container && ReactDOM.createPortal(props.children, container);
// }
