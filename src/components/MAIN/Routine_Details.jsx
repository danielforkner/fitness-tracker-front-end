import { Dropdown } from 'bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const RoutineDetails = ({ currentRoutine, open, setOpen }) => {
  const { activities } = currentRoutine;
  const { user, allActivities } = useAuth();
  const [addActivity, setAddActivity] = useState(false);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState('');

  const handleHide = () => {
    setOpen(false);
  };

  const handleSubmitAddActivity = async (e) => {
    e.preventDefault();
  };

  // in case fetch fails
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
      </Modal.Header>
      <Modal.Body className="routineModalBody">
        <div>
          <div>{currentRoutine.goal}</div>
          <div>{`${currentRoutine.creatorName}`}</div>
          <div>
            {activities.map((elem) => {
              return (
                <div
                  key={elem.id}
                >{`${elem.name}, ${elem.count}, ${elem.duration}`}</div>
              );
            })}
          </div>
          {user.username === currentRoutine.creatorName ? (
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
              <select
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
//   {activities.map((elem, i) => {
//     return <div>{`${elem.name}, ${elem.count}, ${elem.duration}`}</div>;
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
