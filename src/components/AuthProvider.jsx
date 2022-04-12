import AuthContext from '../AuthContext';
import { useState, useEffect } from 'react';
import { myUser } from '../api/fetch';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getUser() {
      if (localStorage.getItem('token')) {
        const ME = await myUser(token)
        setUser(ME);
      } else {
        setUser({});
      }
    }
    getUser();
  }, [token]);
  
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
