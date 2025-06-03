import { useState } from "react";
import { useWeatherQuery } from "./hooks/useWeatherData";
import WeatherForm from "./components/WeatherForm";
import WeatherChart from "./components/WeatherChart";
import WeatherTable from "./components/WeatherTable";
import { format } from "date-fns";
import Loader from "./components/Loader";

export default function App() {
  const [params, setParams] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const [form, setForm] = useState({
    latitude: "",
    longitude: "",
  });
  const [date, setDate] = useState({ from: "", to: "" });
  const { data, isLoading, isError, error } = useWeatherQuery(params, !!params);
  const zippedData =
    data?.time?.map((date, index) => ({
      date,
      maxTemp: data.temperature_2m_max[index],
      minTemp: data.temperature_2m_min[index],
      meanTemp: data.temperature_2m_mean[index],
      maxApp: data.apparent_temperature_max[index],
      minApp: data.apparent_temperature_min[index],
      meanApp: data.apparent_temperature_mean[index],
    })) || [];
  const totalItems = zippedData.length;
  const startIdx = (pagination.page - 1) * pagination.limit;
  const paginatedData = zippedData.slice(startIdx, startIdx + pagination.limit);
  const handleSubmit = (formData) => setParams(formData);

  return (
    <div className="p-4 flex flex-col gap-10 mb-10">
      <h1 className="text-3xl text-center font-bold">Weather Dashboard</h1>
      <WeatherForm
        onSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        date={date}
        setDate={setDate}
        isLoading={isLoading}
      />
      {isLoading && (
        <p className="flex items-center justify-center text-blue-600">
          <Loader />
        </p>
      )}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <WeatherChart
              labels={zippedData.map((row) => format(row.date, "LLL dd, y"))}
              maxTemp={zippedData.map((row) => row.maxTemp)}
              minTemp={zippedData.map((row) => row.minTemp)}
              meanTemp={zippedData.map((row) => row.meanTemp)}
            />
          </div>
          <div>
            <WeatherTable
              data={paginatedData}
              currentPage={pagination.page}
              totalItems={totalItems}
              itemsPerPage={pagination.limit}
              onPageChange={setPagination}
            />
          </div>
        </div>
      )}
    </div>
  );
}
