import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      stepSize: 1,

      suggestedMax: 5,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Consultation",
    },
  },
};

export default function EventChart({ weeksEvents }) {
  //Week event counter
  const DataAndLabel = {};
  const weekLabels = weeksEvents.map((val) => {
    let date = new Date(val.start);
    let temp = `${date.toDateString().slice(4, 10)}`;
    return temp;
  });

  weeksEvents.forEach((num) => {
    let date = new Date(num.start);
    let temp = `${date.toDateString().slice(4, 10)}`;
    DataAndLabel[temp] = DataAndLabel[temp] ? DataAndLabel[temp] + 1 : 1;
  });
  function sortObj(obj) {
    return Object.keys(obj)
      .sort()
      .reduce(function (result, key) {
        result[key] = obj[key];
        return result;
      }, {});
  }
  sortObj(DataAndLabel);
  console.log("counts", DataAndLabel);

  const data = {
    labels: [...new Set(weekLabels.sort())],
    datasets: [
      {
        label: "Patients",
        data: Object.values(sortObj(DataAndLabel)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
