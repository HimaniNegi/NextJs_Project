import { Container, colors } from "@mui/material";
import React from "react";
// import "../../components/sidebar.jsx";

const Dashboard = ({ children }) => {
  console.log("children");
  return (
    <>
      <Container className="modify_container">
        <h2 style={{ color: "#2e3192", marginTop: "40px" }}>
          Dashboard content
        </h2>
      </Container>
    </>
  );
};

export default Dashboard;
