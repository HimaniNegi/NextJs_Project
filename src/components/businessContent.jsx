import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import IosShareIcon from "@mui/icons-material/IosShare";
import React from "react";
import BusinessTable from "./businessTable";

const BusinessContent = () => {
  return (
    <>
      <Grid container md={12} sx={{ mb: 3 }}>
        <Grid item md={6} sx={{ display: "flex" }}>
          <TextField
            id="search"
            type="search"
            label="Search Partners"
            size="small"
            sx={{ height: "0.4375em", color: "red" }}
            className="search_edit"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            sx={{ ml: 2, color: "#000", border: "1px solid #c7c7c7" }}
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "end" }}>
          <Button
            variant="outlined"
            sx={{ ml: 2, color: "#000", border: "1px solid #c7c7c7" }}
            startIcon={<IosShareIcon />}
          >
            Export
          </Button>
        </Grid>
      </Grid>
      <Grid container md={12}>
        <BusinessTable />
      </Grid>
    </>
  );
};

export default BusinessContent;
