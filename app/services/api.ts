import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.fixent.ir/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response.data.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
