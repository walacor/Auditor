import axiosInstance from "./axiosInstance";
import Api from "../Api";

export const userLoginService = (params) =>
  axiosInstance.post(Api.USER_LOGIN, params);

export const userLogoutService = (params) =>
  axiosInstance.post(Api.USER_LOGOUT, params);

export const checkSchemaService = () =>
  axiosInstance.post(Api.CHECK_SCHEMA);

export const createSchemaService = () =>
  axiosInstance.post(Api.CREATE_SCHEMA);
