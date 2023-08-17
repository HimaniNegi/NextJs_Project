"use client";
import AddUsers from "@/components/addUsers";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";

const Users = () => {
  const { open, setOpen } = useThemeContext();
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <Typography variant="p" component="h2" sx={{ mt: 2 }}>
          Users
        </Typography>
        <Box>
          <AddUsers />
        </Box>
      </Container>
    </>
  );
};

export default Users;
