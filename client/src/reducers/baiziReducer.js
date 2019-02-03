import { FETCH_BAIZIS, CREATE_BAIZI, LOGOUT_USER } from "../actions/types.js";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BAIZIS:
      return action.payload;
    case CREATE_BAIZI:
      return [action.payload, ...state];
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
};
