import {
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from "./actionType";

import { userLogoutService } from "../../config";

const userLogout = (data) => {
  return (dispatch) => {
    dispatch(userLogoutRequest());
    userLogoutService(data)
      .then((response) => {
        if (response.data.statusCode !== 1) {
          dispatch(userLogoutFailure(response.data.responseMessage));
        } else {
          dispatch(userLogoutSuccess(response.data.responseData));
        }
      })
      .catch((error) => {
        dispatch(userLogoutFailure(error.data));
      });
  };
};
const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST,
  };
};
const userLogoutSuccess = (data) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: data,
  };
};
const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
  };
};

export { userLogout };
