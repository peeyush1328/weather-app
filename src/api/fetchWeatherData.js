// api/fetchWeather.js
import axiosInstance from "./axiosInstance";

export const fetchWeather = async ({
  latitude,
  longitude,
  startDate,
  endDate,
}) => {
  const response = await axiosInstance.get("/archive", {
    params: {
      latitude,
      longitude,
      start_date: startDate,
      end_date: endDate,
      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "temperature_2m_mean",
        "apparent_temperature_max",
        "apparent_temperature_min",
        "apparent_temperature_mean",
      ].join(","),
      timezone: "auto",
    },
  });

  return response.data.daily;
};
