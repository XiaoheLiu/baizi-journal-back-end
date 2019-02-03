import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import baiziReducer from "./baiziReducer";
import userReducer from "./userReducer";

export default combineReducers({
  baizis: baiziReducer,
  user: userReducer,
  form: formReducer
});
