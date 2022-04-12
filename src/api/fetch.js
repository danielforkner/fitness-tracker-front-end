const apiURL = process.env.REACT_APP_API_URL;

//----------------------------------------------------------------
export const getRoutines = async () => {
  console.log('apiURL', apiURL);
  const response = await fetch(`${apiURL}/routines`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
//---------------------------------------------------------------
export const registerUser = async (username, password) => {
  const response = await fetch(`${apiURL}/users/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`
    })
  })
  const data = await response.json();
  return data;
}
//----------------------------------------------------------------
export const loginUser = async (username, password) => {
  const response = await fetch(`${apiURL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`
    })
  })
  const data = await response.json();
  return data;
}
//----------------------------------------------------------------
export const myUser = async (token) => {
  const response = await fetch(`${apiURL}/users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }})
  const data = await response.json();
  return data;

}
//----------------------------------------------------------------
export const getRoutines = async () => {

  const response = await fetch(
    `${apiURL}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

  const data = await response.json();
  return data;
};
//----------------------------------------------------------------
export const getMyRoutines = async (username) => {

  const response = await fetch(
    `${apiURL}/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  const data = await response.json();
  return data;

}
//----------------------------------------------------------------
export const getActivities = async () => {
  const response = await fetch(
    `${apiURL}/activities`, {
      body: JSON.stringify({
        name: 'Running',
        description: 'Keep on running!'
      })
    })
  const data = await response.json();
  return data;
}

//----------------------------------------------------------------
export const postActivity = async () => {
  const response = await fetch(
    `${apiURL}/activities`, {
      method: "POST",
      body: JSON.stringify({
        name: 'Running',
        description: 'Keep on running!'
      })
    })
  const data = await response.json();
  return data;
}
//----------------------------------------------------------------

export const usersRoutines = async (username) => {
  const response = fetch(`${apiURL}/users/${username}/routines`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json();
  return data;
}
//----------------------------------------------------------------




//----------------------------------------------------------------
