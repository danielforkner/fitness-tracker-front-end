import AuthContext from '../AuthContext';
import { useState, useEffect } from 'react';
import { myUser, getActivities } from '../api/fetch';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    async function getUser() {
      if (localStorage.getItem('token')) {
        const ME = await myUser(token);
        setUser(ME);
      } else {
        setUser({});
      }
    }
    getUser();
  }, [token]);

  useEffect(() => {
    async function getAllActivities() {
      const activities = await getActivities();
      setAllActivities(activities);
      console.log('ACTIVITIES', activities);
    }
    getAllActivities();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        allActivities,
        setAllActivities,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
