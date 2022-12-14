/* eslint-disable no-unused-vars */
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <div style={{ width: 850, height: 400 }}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
