import React, { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import NewActivity from "./NewActivity";
import useAuth from "../hooks/useAuth";
import Routines from "./Routines";
import { pubRoutinesWithActivity } from "../../api/fetch";

const Activities = () => {
  const [openNewActivity, setOpenNewActivity] = useState(false);
  const [toast, setToast] = useState(false);
  const [flag, setFlag] = useState(false);
  const [activID, setActivID] = useState(null);
  const [activRoutines, setActivRoutines] = useState([]);
  const { allActivities } = useAuth();

  useEffect(() => {
    
    const routByActiv = async () => {

      const data = await pubRoutinesWithActivity(activID);
      setActivRoutines(data)
      console.log(activRoutines, "hello " )
      return
    };
    routByActiv();

      if(toast) {
      setTimeout(() => {
      
      setFlag(true)
      
      }, 500);
    }
   
  }, [toast,activID]);

  return (
    <div className="activitiesContainer">
       
      <h4 className="ftHeader">Activities Center</h4>
      <button
        className="btn btn-outline-secondary"
        onClick={() => setOpenNewActivity(true)}
      >
        Add New Activity
      </button>

      {allActivities.map((activity, i) => {
        return (
          <ActivityCard
            activity={activity}
            toast={toast}
            setToast={setToast}
            setActivID={setActivID}
            openNewActivity={openNewActivity}
            key={`activity:${i}`}
          />
        );
      })}
      {openNewActivity && (
        <NewActivity
          openNewActivity={openNewActivity}
          setOpenNewActivity={setOpenNewActivity}
        />
      )}
      {flag ? (
            <div
              className="routinesPopOut ftPopout offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="headerOC offcanvas-header">
                <h5 id="offcanvasRightLabel">Routines with Activity</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={()=> {
                      
                    setFlag(false)}}
                ></button>
              </div>
              <div className="bodyOC offcanvas-body">
                <ul className="routListOC">
                <li className="bodyOCHeader"> Routines: </li>
                  {(activRoutines && activRoutines.length) ? activRoutines.map((element, i) => {
                    
                 
                    return (
                      <li className="bodyItemOC">
                    <li key={`${element.name} + ${i}.sub`}>{ element.name }</li>
                    <button key={`${element.name} + ${i}.button`}
                    className="buttonListOC btn btn-outline-secondary">
                      this button should link to Routine details
                    </button>
                    </li>
                    );
                  }): <li>Sorry, there are no routines with this activity yet</li> }
                </ul>
              </div>
            </div>
          ) : null}
    </div>
  );
};

export default Activities;
