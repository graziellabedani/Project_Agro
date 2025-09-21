import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ labels, data }) {
  const chartData = {
    labels,
    datasets: [{
      label: 'Quantidade',
      data,
      backgroundColor: '#18be3f96'
    }]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: false } }
  };

  return (
    <div style={{ maxWidth: 900 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
