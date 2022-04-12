import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RoutineDetails = ({ currentRoutine, open, setOpen }) => {
  const { activities } = currentRoutine;

  const handleHide = () => {
    setOpen(false);
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
          <div>{currentRoutine.creatorName}</div>
          <div>
            {activities.map((elem) => {
              return (
                <div
                  key={elem.id}
                >{`${elem.name}, ${elem.count}, ${elem.duration}`}</div>
              );
            })}
          </div>
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
