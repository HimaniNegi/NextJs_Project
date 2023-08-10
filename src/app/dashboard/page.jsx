"use client";
import { Box, Container, CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import AppContext from "@/appContext";
import StatusCards from "@/components/statusCards";

const Dashboard = ({ children }) => {
  const context = useContext(AppContext);

  return (
    <>
      <CssBaseline />
      <Container className="modify_container">
        <Box sx={{ marginTop: "10px" }}>
          <StatusCards />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
