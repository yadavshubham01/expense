import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
  const categoryData = {};

  // Group expenses by category
  expenses.forEach((expense) => {
    const category = expense.category || "Uncategorized"; // Default to "Uncategorized" if no category
    categoryData[category] = (categoryData[category] || 0) + expense.amount;
  });

  // Prepare data for the pie chart
  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Debugging: Log the data and options
  console.log("Pie Chart Data:", data);

  // Check if there are no expenses to show
  if (data.labels.length === 0) {
    return <div>No expenses to display</div>;
  }

  return (
    <div className="pie-chart-container">
      <h2>Expense Distribution by Category</h2>
      <div className="pie-chart">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;