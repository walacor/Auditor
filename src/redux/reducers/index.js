import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userLoginReducer from "./userLoginReducer";
import sidebarReducer from "./sidebarReducer";
import checkSchemaReducer from "./checkSchemaReducer";
import anchorListReducer from "./anchorListReducer";

const persistConfig = {
  key: "root",
  storage,
};
const appReducer = combineReducers({
  userLogin: userLoginReducer,
  sidebar: sidebarReducer,
  schema: checkSchemaReducer,
  anchorList: anchorListReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT_SUCCESS") {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
