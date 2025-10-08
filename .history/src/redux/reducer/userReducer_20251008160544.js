const INITIAL_STATE = {
  account: null,
  isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        account: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        account: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
