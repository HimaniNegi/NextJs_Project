"use client";
import { Container, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusinessContent from "@/components/businessContent";

const Partners = () => {
  const { open } = useThemeContext();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <Typography
          component="h2"
          variant="p"
          sx={{ my: 2, fontWeight: "400" }}
        >
          Partners
        </Typography>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Business" value="1" />
                <Tab label="Individual" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ p: 0, py: 3 }}>
              <BusinessContent />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default Partners;
