import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const WeatherChart = ({ labels, maxTemp, minTemp, meanTemp }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Max Temp (°C)",
        data: maxTemp,
        borderColor: "#f87171",
        backgroundColor: "#f87171",
        fill: false,
      },
      {
        label: "Min Temp (°C)",
        data: minTemp,
        borderColor: "#60a5fa",
        backgroundColor: "#60a5fa",
        fill: false,
      },
      {
        label: "Mean Temp (°C)",
        data: meanTemp,
        borderColor: "#34d399",
        backgroundColor: "#34d399",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#374151",
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        ticks: {
          color: "#6b7280",
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow w-full overflow-x-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
