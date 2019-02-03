import {
  CREATE_USER,
  AUTH_USER,
  LOGOUT_USER,
  DUPLICATE_USER,
  LOGIN_ERROR,
  GET_USER
} from "../actions/types.js";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case AUTH_USER:
      return action.payload;
    case LOGOUT_USER:
      return {};
    case DUPLICATE_USER:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    case GET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
