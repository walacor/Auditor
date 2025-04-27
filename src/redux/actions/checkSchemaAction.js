import {
  CHECK_SCHMEA_REQUEST,
  CHECK_SCHMEA_SUCCESS,
  CHECK_SCHMEA_FAILURE,
} from "./actionType";

import { checkSchemaService } from "../../config";
import { setActiveTab } from "./setActiveTab";

const checkSchema = (data, navigate) => {
  return (dispatch) => {
    dispatch(checkSchemaRequest());
    checkSchemaService(data)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(checkSchemaSuccess(response?.data));
        } else {
          dispatch(checkSchemaFailure(response));
          navigate("/settings");
          dispatch(setActiveTab("Settings"));
        }
      })
      .catch((error) => {
        dispatch(checkSchemaFailure(error));
        navigate("/settings");
        dispatch(setActiveTab("Settings"));
      });
  };
};
export const checkSchemaRequest = () => {
  return {
    type: CHECK_SCHMEA_REQUEST,
  };
};
export const checkSchemaSuccess = (data) => {
  return {
    type: CHECK_SCHMEA_SUCCESS,
    payload: data,
  };
};
export const checkSchemaFailure = (error) => {
  return {
    type: CHECK_SCHMEA_FAILURE,
    payload: error,
  };
};

export { checkSchema };
