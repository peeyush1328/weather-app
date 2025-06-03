// hooks/useWeatherQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/fetchWeatherData";

export const useWeatherQuery = (params, enabled = true) => {
  return useQuery({
    queryKey: ["weather", params],
    queryFn: () => fetchWeather(params),
    enabled: enabled && !!params?.latitude && !!params?.longitude,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
