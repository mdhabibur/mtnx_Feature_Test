import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = ({ chartData }) => {
	const data = {
		labels: chartData.labels,
		datasets: [
			{
				label: chartData.top_label,
				data: chartData.data,
				backgroundColor: "#4F46E5",
			},
		],
	};

	const options = {
		responsive: true,
		indexAxis: 'y', // This makes the bars horizontal
		plugins: {
			legend: {
				display: true,
				position: "top",
			},
			title: {
				display: true,
				text: chartData.legend_text,
			},
		},
		scales: {
			x: {
				beginAtZero: true,
			},
		},
	};

	return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
