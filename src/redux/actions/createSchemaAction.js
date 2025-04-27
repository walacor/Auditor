import {
  CREATE_SCHEMA_FAILURE,
  CREATE_SCHEMA_REQUEST,
  CREATE_SCHEMA_SUCCESS,
} from "./actionType";

import { createSchemaService } from "../../config";
import {
  checkSchemaFailure,
  checkSchemaRequest,
  checkSchemaSuccess,
} from "./checkSchemaAction";

const createSchema = (data) => {
  return (dispatch) => {
    dispatch(checkSchemaRequest());
    createSchemaService(data)
      .then((response) => {
        if (response?.status === 200) {
          //   dispatch(createSchemaSuccess(response?.data));
          dispatch(checkSchemaSuccess(response?.data));
        } else {
          dispatch(createSchemaFailure(response));
        }
      })
      .catch((error) => {
        dispatch(checkSchemaFailure(error));
      });
  };
};
const createSchemaRequest = () => {
  return {
    type: CREATE_SCHEMA_REQUEST,
  };
};
const createSchemaSuccess = (data) => {
  return {
    type: CREATE_SCHEMA_SUCCESS,
    payload: data,
  };
};
const createSchemaFailure = (error) => {
  return {
    type: CREATE_SCHEMA_FAILURE,
    payload: error,
  };
};

export { createSchema };
