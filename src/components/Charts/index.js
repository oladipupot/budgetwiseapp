// import React from 'react';
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, DoughnutController } from "react-chartjs-2"

// function Charts() {
//   return (
//     <div>
//         <Bar 
//             data={(
//                 labels: ["A", "B", "C"],
//                 datasets: [
//                     {
//                         label:"Revenue",
//                         data: [200,300,400],
//                     },
//                 ],
//             )}
//         />
//     </div>
//   )
// }

// export default Charts


import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";

function Charts() {
  const lineData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Revenue",
        data: [200, 300, 400],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Adds smooth curve to the line
      },
    ],
  };

  const pieData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Revenue Share",
        data: [200, 300, 400],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <div style={{ width: "45%", height: "400px" }}>
        <h2>Line Chart</h2>
        <Line data={lineData} options={options} />
      </div>

      <div style={{ width: "45%", height: "250px", marginTop: "-150px" }}>
        <h2>Pie Chart</h2>
        <Pie data={pieData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

export default Charts;