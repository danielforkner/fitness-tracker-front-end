import { useContext } from 'react';
import AuthContext from '../../AuthContext';

// const context = useContext(AuthContext)

const useAuth = () => {
  const { user, setUser, token, setToken, allActivities, setAllActivities } =
    useContext(AuthContext);

  return {
    user,
    setUser,
    token,
    setToken,
    allActivities,
    setAllActivities,
  };
};

export default useAuth;
