import React from 'react';

const RoutinesWithActivitiesFlag = ({
  setFlag,
  activRoutines,
  setOpen,
  setCurrentRoutine,
}) => {
  return (
    <div
      className="routinesPopOut ftPopout offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="headerOC offcanvas-header">
        <h5 id="offcanvasRightLabel">Routines with Activity: </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => {
            setFlag(false);
          }}
        ></button>
      </div>
      <div className="bodyOC offcanvas-body">
        <ul className="routListOC">
          <li className="bodyOCHeader"> Routines: </li>
          {activRoutines && activRoutines.length ? (
            activRoutines.map((element, i) => {
              return (
                <li className="bodyItemOC" key={`sidebarRoutines:${i}`}>
                  <div key={`${element.name} + ${i}.sub`}>{element.name}</div>
                  <div
                    key={`${element.name} + ${i}.button`}
                    className="buttonListOC btn btn-outline-secondary"
                    onClick={() => {
                      setOpen(true);
                      setCurrentRoutine(element);
                    }}
                  >
                    Details
                  </div>
                </li>
              );
            })
          ) : (
            <li>Sorry, there are no routines with this activity yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RoutinesWithActivitiesFlag;
