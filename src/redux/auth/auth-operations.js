import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = data => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', data);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
const signIn = data => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', data);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};
const signOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();

  if (!persistToken) {
    return;
  }

  token.set(persistToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
};
