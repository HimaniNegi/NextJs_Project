import AddUsers from "@/components/addUsers";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <Container className="modify_container">
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

export default page;
