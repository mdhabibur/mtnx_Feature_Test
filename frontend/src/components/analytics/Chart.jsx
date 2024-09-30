import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Chart = ({chartData}) => {
    //data for chart

    const data = {
        labels: chartData.labels,
          datasets: [
            {
              label: chartData.top_label,
              data: chartData.data,
              fill: false,
              borderColor: '#4F46E5', 
              tension: 0.2, // Curve the line
            },
          ],

    }

      // Options for chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: chartData.legend_text,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;


}

export default Chart