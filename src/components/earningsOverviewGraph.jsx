"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

const EarningsOverviewGraph = () => {
  const [donationData, setDonationData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/donation")
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          setDonationData({
            labels: data?.map((individualData) => individualData.month),
            datasets: [
              {
                label: "Amount",
                data: data?.map((individualData) => individualData.amount),
                backgroundColor: "pink",
                borderColor: "#2e3192",
              },
            ],
          });
        } else {
          console.log("No data found..");
        }
      })
      .catch((err) => {
        console.log("Error Found");
      });
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          mt: "20px",
          background: "#fff",
          boxShadow: "2px 2px 16px #ececec",
          padding: "12px 16px",
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: "600", textDecoration: "underline", mb: "14px" }}
        >
          Earnings Overview
        </Typography>
        {donationData !== null ? (
          <div style={{ width: "100%" }}>
            <Line data={donationData} />
          </div>
        ) : (
          <div>Donation data is null</div>
        )}
      </Box>
    </>
  );
};

export default EarningsOverviewGraph;
