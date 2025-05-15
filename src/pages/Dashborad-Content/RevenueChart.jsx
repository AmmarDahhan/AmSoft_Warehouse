import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
  datasets: [
    {
      label: "الإيرادات",
      data: [12000, 15000, 11000, 18000, 20000, 17000],
      borderColor: "#FF8E29",
      backgroundColor: "rgba(255, 142, 41, 0.2)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: "#FF8E29",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `${value} ل.س`,
      },
    },
  },
};

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-6 mx-6">
      <h2 className="text-right text-[#1E293B] font-semibold text-lg mb-4">
        الإيرادات خلال الأشهر
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
