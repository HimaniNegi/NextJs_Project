"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ReviewResourcesGraph = () => {
  const data = {
    labels: ["One", "Two", "Three"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["#a900a9", "#00bd55", "#d8cb00"],
      },
    ],
  };

  const options = {};

  return (
    <>
      <Box
        component="div"
        sx={{
          mt: "36px",
          background: "#fff",
          boxShadow: "2px 2px 16px #ececec",
          padding: "12px 16px",
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: "600", textDecoration: "underline", mb: "26px" }}
        >
          Review Resources
        </Typography>
        <Pie data={data} options={options}></Pie>
      </Box>
    </>
  );
};

export default ReviewResourcesGraph;
