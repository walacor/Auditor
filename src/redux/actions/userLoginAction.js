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
        if (response.data.statusCode !== 1) {
          dispatch(userLoginFailure(response.data.responseMessage));
        } else {
          dispatch(userLoginSuccess(response.data.responseData));
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
