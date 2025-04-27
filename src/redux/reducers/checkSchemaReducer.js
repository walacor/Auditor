import {
  CHECK_SCHMEA_FAILURE,
  CHECK_SCHMEA_REQUEST,
  CHECK_SCHMEA_SUCCESS,
} from "../actions/actionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const checkSchemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SCHMEA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHECK_SCHMEA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CHECK_SCHMEA_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default checkSchemaReducer;
