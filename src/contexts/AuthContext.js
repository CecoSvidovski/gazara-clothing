import { createContext, useState, useContext, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocument,
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
        createUserDocument(currUser);
      }
      setUser(currUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
