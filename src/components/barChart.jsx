"use client"
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Create the chart
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup when the component unmounts
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
