export const doLogin = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};

export const doLogout = () => {
  return {
    type: "LOGOUT",
  };
};
