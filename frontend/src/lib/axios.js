// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
//   withCredentials: true,
// });
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://chat-app-2-atif.onrender.com/api",
  withCredentials: true,
});
