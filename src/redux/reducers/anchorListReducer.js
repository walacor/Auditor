import {
  ANCHOR_LIST_REQUEST,
  ANCHOR_LIST_SUCCESS,
  ANCHOR_LIST_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const anchorListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANCHOR_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ANCHOR_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case ANCHOR_LIST_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default anchorListReducer;
