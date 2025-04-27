import {
  INSERT_RECORD_REQUEST,
  INSERT_RECORD_SUCCESS,
  INSERT_RECORD_FAILURE,
} from "./actionType";

import { insertRecordService } from "../../config";
import { setActiveTab } from "./setActiveTab";

const insertRecord = (data) => {
  return (dispatch) => {
    dispatch(insertRecordRequest());
    insertRecordService(data)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(insertRecordSuccess(response?.data));
        } else {
          dispatch(insertRecordFailure(response));
          // navigate("/settings");
          dispatch(setActiveTab("Settings"));
        }
      })
      .catch((error) => {
        dispatch(insertRecordFailure(error));
        // navigate("/settings");
        // dispatch(setActiveTab("Settings"));
      });
  };
};
export const insertRecordRequest = () => {
  return {
    type: INSERT_RECORD_REQUEST,
  };
};
export const insertRecordSuccess = (data) => {
  return {
    type: INSERT_RECORD_SUCCESS,
    payload: data,
  };
};
export const insertRecordFailure = (error) => {
  return {
    type: INSERT_RECORD_FAILURE,
    payload: error,
  };
};

export { insertRecord };
