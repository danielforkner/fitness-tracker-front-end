import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { newRoutineActivityy, deleteRoutineActivity } from '../../api/fetch';
import useAuth from '../hooks/useAuth';
import { getMyRoutines } from '../../api/fetch';
import AddRoutineActivityForm from './Activities/AddRoutineActivityForm';
import EditRoutineActivityForm from './Activities/EditRoutineActivityForm';

const RoutineDetails = ({
  setCurrentRoutine,
  currentRoutine,
  open,
  setOpen,
}) => {
  const { activities, id: routineId } = currentRoutine;
  const { user, allActivities, token } = useAuth();
  const [addActivity, setAddActivity] = useState(false);
  const [editActivity, setEditActivity] = useState(false);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(allActivities[0].id);
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
    const response = await newRoutineActivityy(
      routineId,
      selectedActivity,
      count,
      duration
    );
    if (response.error) {
      console.error(response.error);
    } else {
      try {
        const updatedRoutines = await getMyRoutines(user.username, token);
        setCurrentRoutine(
          updatedRoutines.filter(
            (routine) => routine.id === currentRoutine.id
          )[0]
        );
      } catch (error) {
        console.error(error);
      } finally {
        setAddActivity(false);
      }
    }
  };

  const deleteActivity = async (activity) => {
    const response = await deleteRoutineActivity(
      activity.routineActivityId,
      token
    );
    if (response.error) {
      console.error(response.error);
    } else {
      try {
        const updatedRoutines = await getMyRoutines(user.username, token);
        setCurrentRoutine(
          updatedRoutines.filter(
            (routine) => routine.id === currentRoutine.id
          )[0]
        );
      } catch (error) {
        console.error(error);
      }
    }
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
        <Modal.Title as="h3" className="ftHeader">
          {currentRoutine.name}
        </Modal.Title>
        <p>
          <em className="ftHeader">{`By ${currentRoutine.creatorName}`}</em>
        </p>
      </Modal.Header>
      <Modal.Body className="ftBodyText routineModalBody">
        <div>
          <div className="routineGoal">{currentRoutine.goal}</div>
          <div className="routineActivities">
            {activities.length > 0 ? <h5>Activities:</h5> : 'No Activities'}
            {activities.map((activity) => {
              return (
                <div className="activityCard" key={activity.id}>
                  <h4>{`${activity.name}`}</h4>
                  <p>{activity.description}</p>
                  <p>{`Count: ${activity.count}`}</p>
                  <p> {`Duration: ${activity.duration}`}</p>
                  {ourRoutine ? (
                    <>
                      <div
                        className="deleteActivityBtn"
                        onClick={() => deleteActivity(activity)}
                      >
                        DELETE
                      </div>
                      <div
                        className="deleteActivityBtn"
                        onClick={() => {
                          setEditActivity(!editActivity);
                        }}
                      >
                        EDIT
                      </div>
                    </>
                  ) : null}
                  {editActivity ? (
                    <EditRoutineActivityForm
                      setEditActivity={setEditActivity}
                      activity={activity}
                      setCurrentRoutine={setCurrentRoutine}
                      currentRoutine={currentRoutine}
                      id={activity.routineActivityId}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
          {ourRoutine ? (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setAddActivity(!addActivity);
              }}
            >
              ADD ACTIVITY
            </button>
          ) : // https://reactjs.org/docs/forms.html#the-select-tag
          null}
          {addActivity ? (
            <AddRoutineActivityForm
              setCount={setCount}
              setDuration={setDuration}
              count={count}
              duration={duration}
              allActivities={allActivities}
              selectedActivity={selectedActivity}
              setSelectedActivity={setSelectedActivity}
              handleSubmitAddActivity={handleSubmitAddActivity}
            />
          ) : null}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-outline-secondary" onClick={handleHide}>
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
