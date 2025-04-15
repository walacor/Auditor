import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Authorization": accessToken ? `Bearer ${accessToken}` : "",
    "Content-Type": "multipart/form-data",
    "accessToken": accessToken || "",
  },
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
