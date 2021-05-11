import { createContext, useReducer } from 'react';
import authReducer from './AuthReducer';
const INITIAL_STATE = {
  user: {
    _id: '609911b1ab13f011021618ee',
    username: 'lama',
    email: 'lama@gmail.com',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    following: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
