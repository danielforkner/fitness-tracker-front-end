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
//----------------------------------------------------------------
export const getMyRoutines = async (username) => {
  const response = await fetch(`${apiURL}/${username}/routines`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
//----------------------------------------------------------------
export const getActivities = async () => {
  const response = await fetch(`${apiURL}/activities`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Running',
      description: 'Keep on running!',
    }),
  });
  const data = await response.json();
  return data;
};
