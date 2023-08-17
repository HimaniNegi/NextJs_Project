"use client";
import { Container } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";

const Payment = () => {
  const { open, setOpen } = useThemeContext();
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <h1>Payment content</h1>
      </Container>
    </>
  );
};

export default Payment;
