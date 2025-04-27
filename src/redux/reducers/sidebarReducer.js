import { SET_ACTIVE_TAB } from "../actions/actionType";

const initialState = {
  activeTab: "Anchor Details", // Default active tab
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;