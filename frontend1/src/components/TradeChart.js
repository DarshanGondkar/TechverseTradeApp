import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TradeChart = ({ trades }) => {
const sortedTrades = [...trades].sort(
  (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
);

const data = {
  labels: sortedTrades.map(trade => new Date(trade.timestamp).toLocaleString()),
  datasets: [
    {
      label: 'Stock Price',
      data: sortedTrades.map(trade => trade.price),
      borderColor: 'rgba(59,130,246,1)',
      backgroundColor: 'rgba(59,130,246,0.1)',
      fill: true,
      tension: 0.4,
    }
  ]
};


  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: '📈 Stock Price Over Time',
        font: { size: 18 }
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default TradeChart;
