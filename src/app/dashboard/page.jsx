"use client";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React, { useContext } from "react";
import StatusCards from "@/components/statusCards";
import EarningsOverviewGraph from "@/components/earningsOverviewGraph";
import ReviewResourcesGraph from "@/components/reviewResourcesGraph";
import { useThemeContext } from "../context/context";

const Dashboard = ({ children }) => {
  const { open, setOpen } = useThemeContext();
  return (
    <>
      <CssBaseline />
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <Box sx={{ marginTop: "10px" }}>
          <StatusCards />
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <EarningsOverviewGraph />
            </Grid>
            <Grid item xs={4}>
              <ReviewResourcesGraph />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
