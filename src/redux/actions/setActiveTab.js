import { SET_ACTIVE_TAB } from "./actionType";

export const setActiveTab = (tabName) => {
  return {
    type: SET_ACTIVE_TAB,
    payload: tabName,
  };
};