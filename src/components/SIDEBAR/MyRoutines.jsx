import React from 'react';
import {Link} from 'react-router-dom';
//----------------------------------------------------------------
const MyRoutines = () => {
  return (
    <div className="list-group list-group-flush border-bottom scrollarea">  MYROUTINES
    <Link to="/" className="list-group list-group-flush border-bottom scrollarea" >  MYROUTINESLINK 
    <div className="d-flex w-100 align-items-center justify-content-between"> HEADER  
    <small>DATE</small> 
    </div>
    <div className="col-10 mb-1 small">  BODY   </div>
    </Link>
    

    
    </div>
  )
}










//----------------------------------------------------------------
export default MyRoutines;