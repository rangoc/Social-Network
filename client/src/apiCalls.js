import axios from 'axios';

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const { data } = await axios.post('/auth/login', userCredentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
