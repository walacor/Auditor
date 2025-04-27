import axiosInstance from "./axiosInstance";
import Api from "../../constants/Api";

export const userLoginService = (params) =>
  axiosInstance.post(Api.USER_LOGIN, params);

export const userLogoutService = (params) =>
  axiosInstance.post(Api.USER_LOGOUT, params);

export const checkSchemaService = (params) =>
  axiosInstance.post(Api.CHECK_SCHEMA, params);

export const createSchemaService = (params) =>
  axiosInstance.post(Api.CREATE_SCHEMA, params);

export const insertRecordService = (params) =>
  axiosInstance.post(Api.INSERT_RECORD, params);

export const anchorListService = (params) =>
  axiosInstance.get(`${Api.SEARCH_MEMO_TRANSACTION}?limit=10`);
