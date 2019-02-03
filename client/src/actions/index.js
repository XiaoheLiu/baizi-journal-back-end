import * as baiziApi from "../integration/baizi";
import * as userApi from "../integration/user";
import * as types from "./types";

export const fetchBaizis = () => async dispatch => {
  const data = await baiziApi.fetchBaizis().catch(() => {
    console.log("Error: can't fetch baizi.");
  });
  if (data) {
    dispatch({ type: types.FETCH_BAIZIS, payload: data });
  }
};

export const createBaizi = newBaizi => async dispatch => {
  const data = await baiziApi.createBaizi(newBaizi).catch(() => {
    console.log("Error: can't create baizi.");
  });
  if (data) {
    dispatch({
      type: types.CREATE_BAIZI,
      payload: { ...newBaizi, _id: data.baiziId }
    });
  }
};

export const createUser = newUser => async dispatch => {
  const { token } = await userApi
    .createUser(newUser.username, newUser.password)
    .catch(error => {
      if (error.response.status === 409) {
        dispatch({
          type: types.DUPLICATE_USER,
          payload: { errorMessage: "注册失败：该用户名已存在！" }
        });
      } else {
        dispatch({
          type: types.LOGIN_ERROR,
          payload: { errorMessage: "注册失败，请再试一次" }
        });
      }
    });
  if (token) {
    dispatch({
      type: types.CREATE_USER,
      payload: { token }
    });
    return token;
  }
};

export const authUser = user => async dispatch => {
  const { token } = await userApi
    .authUser(user.username, user.password)
    .catch(() => {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: { errorMessage: "登录失败：用户名或密码错误！" }
      });
    });
  if (token) {
    dispatch({
      type: types.AUTH_USER,
      payload: { token }
    });
    return token;
  }
};

export const getUser = () => async dispatch => {
  const userInfo = await userApi.getUser().catch(err => console.log(err));
  console.log(userInfo);
  if (userInfo) {
    dispatch({
      type: types.GET_USER,
      payload: userInfo
    });
  }
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER
  };
};
