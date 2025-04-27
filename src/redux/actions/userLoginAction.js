import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./actionType";

import { userLoginService } from "../../config";

const userLogin = (data) => {
  return (dispatch) => {
    dispatch(userLoginRequest());
    userLoginService(data)
      .then((response) => {
        if (response.data.status === 200) {
          dispatch(userLoginSuccess(response.data.data));
        } else {
          dispatch(userLoginFailure(response.data.data));
        }
      })
      .catch((error) => {
        dispatch(userLoginFailure(error.data));
      });
  };
};
const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};
const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};
const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

export { userLogin };
