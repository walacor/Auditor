import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userLoginReducer from "./userLoginReducer";

const persistConfig = {
  key: "root",
  storage,
};
const appReducer = combineReducers({
  userLogin: userLoginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT_SUCCESS") {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
