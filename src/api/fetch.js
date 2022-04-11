export const getRoutines = async () => {
  const response = await fetch(
    'http://fitnesstrac-kr.herokuapp.com/api/routines'
  );
  const data = await response.json();
  return data;
};
