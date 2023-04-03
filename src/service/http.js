import axios from 'axios';

const API_URL = process.env.SERVER_API_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.defaults.timeout = 10000;

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const requestHandler = (request) => {
  const token = localStorage.get('token');
  request.headers.Authorization = token ? `Bearer ${token}` : ``;
  return request;
};

const responseHandler = (response) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.headers.authorization}`;
  return response.data;
};
const errorHandler = (error) => {};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
