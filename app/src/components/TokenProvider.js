import { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';


export const TokenContext = createContext(null);

const TokenProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [subscribedActivities, setSubscribedActivities] = useState([]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    subscribedActivities,
    setSubscribedActivities
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("user");
      const storedUserId = localStorage.getItem("userId");

      if (token && storedUser && storedUserId && storedUser !== "undefined") {
        const userObj = JSON.parse(storedUser);
        setUser({ ...userObj, userId: storedUserId }); 
      }
    }
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={value}>
      {children}
      <ToastContainer />
    </TokenContext.Provider>
  );
};

export default TokenProvider;
