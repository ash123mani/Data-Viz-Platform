// components/UnsatisfiedDemandChart.tsx
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const UnsatisfiedDemandChart: React.FC = () => {
  const highlightIndex = 3; // July

  const data: ChartData<'line', number[], string> = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Unsatisfied Demand',
        data: [38000, 48000, 40000, 89600, 60000, 30000, 56000],
        borderColor: '#C0FF70',
        backgroundColor: '#C0FF70',
        tension: 0.4,
        pointBackgroundColor: (ctx) =>
          ctx.dataIndex === highlightIndex ? '#000' : '#C0FF70',
        pointRadius: (ctx) =>
          ctx.dataIndex === highlightIndex ? 6 : 4,
        pointHoverRadius: 6,
        pointBorderColor: '#C0FF70',
        pointStyle: (ctx) =>
          ctx.dataIndex === highlightIndex ? 'triangle' : 'circle',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            const target = 85600;
            const diff = ((value - target) / target) * 100;
            return `$${(value / 1000).toFixed(2)}k (${diff.toFixed(1)}% ${
              diff > 0 ? 'above' : 'below'
            } target)`;
          },
        },
        backgroundColor: '#222',
        titleColor: '#fff',
        bodyColor: '#ccc',
        borderColor: '#C0FF70',
        borderWidth: 1,
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (val) => `$${Number(val) / 1000}K`,
          color: '#ccc',
        },
        grid: {
          color: '#333',
        },
      },
      x: {
        ticks: {
          color: '#ccc',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: '400px', background: '#111', padding: '1rem', borderRadius: '8px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default UnsatisfiedDemandChart;
