"use client";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import ModelPopupAddUser from "./modelPopupAddUser";

const AddUsers = () => {
  const [rows, setRows] = useState(null);
  const [searched, setSearched] = useState("");
  React.useEffect(() => {
    const originalRows = async () => {
      const result = await axios.get("https://dummyjson.com/users");
      setRows(result.data.users);
    };
    originalRows();
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("");
  };

  return (
    <>
      <Grid
        xs={12}
        sx={{ justifyContent: "space-between", my: 3, alignItems: "end" }}
        container
      >
        <Grid xs={6} item sx={{ display: "flex" }}>
          <Grid xs={12} container>
            <Grid xs={6} item>
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
              />
            </Grid>
            <Grid xs={6} item></Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ textAlign: "right" }} item>
          <ModelPopupAddUser />
        </Grid>
      </Grid>

      <Paper>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>University</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow key={row.firstName}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.university}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default AddUsers;
