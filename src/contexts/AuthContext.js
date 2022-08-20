import { createContext, useState, useContext, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserAuthDocument,
} from '../utils/firebase';

const initialAuthState = {
  user: null,
  setUser: () => null,
};

export const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currUser) => {
      if (currUser) {
        createUserAuthDocument(currUser);
      }
      setUser(currUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
