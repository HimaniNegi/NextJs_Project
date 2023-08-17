"use client";
import { Container, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";

const Partners = () => {
  const { open } = useThemeContext();
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <Typography
          component="h2"
          variant="p"
          sx={{ mt: 2, fontWeight: "400" }}
        >
          Partners
        </Typography>
      </Container>
    </>
  );
};

export default Partners;
