import { Box, Grid } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import React from "react";

const BusinessContent = () => {
  return (
    <>
      <Grid container md={12}>
        <Grid item md={6} sx={{ display: "flex" }}>
          <SearchBar
            placeholder="Search Partners"
            autoFocus
            className="search_edit"
          />
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </>
  );
};

export default BusinessContent;
