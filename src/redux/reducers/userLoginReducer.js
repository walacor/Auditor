import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  RESET_STATE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  login: [],
  error: "",
  isLogIn: false,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        isLogIn: true,
        login: action.payload,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        isLogIn: false,
        login: "",
        error: action.payload,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
export default userLoginReducer;
