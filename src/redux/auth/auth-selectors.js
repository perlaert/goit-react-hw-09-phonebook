const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUserEmail,
};
