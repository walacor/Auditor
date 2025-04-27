import {
  ANCHOR_LIST_REQUEST,
  ANCHOR_LIST_SUCCESS,
  ANCHOR_LIST_FAILURE,
} from "./actionType";

import { anchorListService } from "../../config";
import { setActiveTab } from "./setActiveTab";

const getAnchorList = (data) => {
  return (dispatch) => {
    dispatch(anchorListRequest());
    anchorListService(data)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(anchorListSuccess(response?.data?.data?.memoTransactionResponse));
        } else {
          dispatch(anchorListFailure(response));
          dispatch(setActiveTab("Settings"));
        }
      })
      .catch((error) => {
        dispatch(anchorListFailure(error));
        dispatch(setActiveTab("Settings"));
      });
  };
};
export const anchorListRequest = () => {
  return {
    type: ANCHOR_LIST_REQUEST,
  };
};
export const anchorListSuccess = (data) => {
  return {
    type: ANCHOR_LIST_SUCCESS,
    payload: data,
  };
};
export const anchorListFailure = (error) => {
  return {
    type: ANCHOR_LIST_FAILURE,
    payload: error,
  };
};

export { getAnchorList };
