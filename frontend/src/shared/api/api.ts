import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'accessToken'
    )}`;
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);
