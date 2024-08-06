import { API_URL } from "@env";
import axios from "axios";

import { useAuthStore } from "~/stores/useAuthStore";

const baseConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const privateApi = axios.create(baseConfig);

privateApi.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) config.headers.set("Authorization", `Bearer ${token}`);
    return config;
  },
  (error) => Promise.reject(error),
);

export const publicAPI = axios.create(baseConfig);
export const privateAPI = axios.create(baseConfig);

const publicApi = axios.create(baseConfig);

export const getApi = ({ isPrivateApi } = { isPrivateApi: true }) =>
  isPrivateApi ? privateApi : publicApi;
