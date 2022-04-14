const apiURL = process.env.REACT_APP_API_URL;


// export const name = async () => {
//   const response = await fetch(`${apiURL}
//   const data = await response.json();
//   return data;
// }
//----------------------------------------------------------------
//---------------------------------------------------------------
export const registerUser = async (username, password) => {
  const response = await fetch(`${apiURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`
    }),
  });
  const data = await response.json();
  return data;
};
//----------------------------------------------------------------
export const loginUser = async (username, password) => {
  const response = await fetch(`${apiURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`
    }),
  });
  const data = await response.json();
  return data;
};
//----------------------------------------------------------------
export const myUser = async (token) => {
  const response = await fetch(`${apiURL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  });
  const data = await response.json();
  return data;
};
//----------------------------------------------------------------
export const getRoutines = async () => {
  try {
    const response = await fetch(`${apiURL}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
//----------------------------------------------------------------
export const getMyRoutines = async (username, token) => {
  try {
    const response = await fetch(`${apiURL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------
export const getActivities = async () => {
  try {
    const response = await fetch(`${apiURL}/activities`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------
export const postActivity = async () => {
  try {
    const response = await fetch(`${apiURL}/activities`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Running',
        description: 'Keep on running!'
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------

export const usersRoutines = async (username) => {
  try {
    const response = fetch(`${apiURL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------
export const pubRoutinesWithActivity = async (activityID) => {
  try {
    const response = fetch(`${apiURL}/activities/${activityID}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
//----------------------------------------------------------------
export const createRoutine = async (name, goal, isPublic) => {
  try {
    const response = await fetch(`${apiURL}/routines`, {
      method: 'POST',
      body: JSON.stringify({
        name: `${name}`,
        goal: `${goal}`,
        isPublic: `${isPublic}`
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
//----------------------------------------------------------------
export const editRoutine = async (id, name, goal) => {
  try {
    const response = await fetch(`${apiURL}/routines/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: `${name}`,
        goal: `${goal}`
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------
export const deleteRoutine = async (id, token) => {
  try {
    const response = await fetch(`${apiURL}/routines/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------
export const newRoutineActivityy = async (routineId, inpActivityId, inpCount, inpDuration) => {
 
  try {
    const response = await fetch(`${apiURL}/routines/${routineId}/activities`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'},
      body: JSON.stringify({
      activityId: +inpActivityId,
        count: +inpCount,
        duration: +inpDuration
      }),
    });
    const data = await response.json();
    console.log(data, "data")
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};


//----------------------------------------------------------------
export const editRoutineActivity = async (id, count, duration) => {
  try {
    const response = await fetch(`${apiURL}/routine_activities/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        count: +count,
        duration: +duration
      }),
    });
    
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e,);
    throw e;
  }
};

//----------------------------------------------------------------

export const deleteRoutineActivity = async (id, token) => {
  try {
    const response = await fetch(`${apiURL}/routine_activities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//----------------------------------------------------------------