"use client"
import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateIcon from '@mui/icons-material/Create';
import Link from "next/link";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function student() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
   .then(res=>{
    setData(res.data);
    setRecord(res.data);
   })
   .catch(error => console.log(error))
  }, []);
  return (
    <Container className="modify_container">
         <TableContainer component={Paper} >
      <Table  aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
            <StyledTableCell align="right">Email(g)</StyledTableCell>
            <StyledTableCell align="right">Action(g)</StyledTableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
              <Link href={`/students/${row.id}`}>
                <CreateIcon/>
                </Link>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}

