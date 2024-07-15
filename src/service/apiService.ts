import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/petspa',
  withCredentials: true,
});


export default api;


// import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';


// const BASE_URL = 'http://localhost:8080/petspa'


// const api: AxiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   function (config: InternalAxiosRequestConfig) {

//     config.headers = config.headers || {};

//     const accessToken = localStorage.getItem("jwtToken");

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   function (response: AxiosResponse) {
//     return response;
//   },
//   function (error) {
//     if (error.message === "Network Error" && !error.response) {
//       console.error("Network Error, Please check connection!");
//     }
//     if (error.response && error.response.status === 401) {
//       console.error("You not allow to access this page");
//     }
//     return Promise.reject(error);
//   }
// );


// export default api;
