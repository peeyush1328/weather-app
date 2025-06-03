import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://archive-api.open-meteo.com/v1",
  timeout: 10000,
});

export default axiosInstance;
