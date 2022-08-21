import { createContext, useReducer, useContext, useEffect } from 'react';

import { createAction } from '../utils/reducer';
import {
  onAuthStateChangedListener,
  createUserAuthDocument,
} from '../utils/firebase';

export const AuthContext = createContext({
  user: null,
  setUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_USER: 'SET_USER',
};

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return { ...state, user: payload };
    default:
      console.log(`Unhandled type ${type} in userReducer`);
  }
};

export const AuthProvider = ({ children }) => {
  const [{user}, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPES.SET_USER, user));

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currUser) => {
      if (currUser) {
        createUserAuthDocument(currUser);
      }
      setUser(currUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
