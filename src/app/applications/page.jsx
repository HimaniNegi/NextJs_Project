"use client";
import BasicTabs from "@/components/tabs";
import { Container } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";

const Applications = () => {
  const { open, setOpen } = useThemeContext();
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <BasicTabs />
      </Container>
    </>
  );
};

export default Applications;
