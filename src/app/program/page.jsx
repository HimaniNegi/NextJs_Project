"use client";
import { Container } from "@mui/material";
import React from "react";
import Home from "@/components/barChartHome";
import { useThemeContext } from "../context/context";

const Program = () => {
  const { open, setOpen } = useThemeContext();
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <Home />
      </Container>
    </>
  );
};

export default Program;
