import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';




export default function FormPropsTextFields() {

  const [text, setText] = useState([]);
  const [newValue,setNewValue] = useState([]);
  const id = useParams();
  console.log(id,"id");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/1`)
   .then(res=>{
    console.log(res.data.name,"name");
    setText(res.data.name);
    setNewValue(res.data.email);
   })
   .catch(error => console.log(error))
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUserName = (e) => {
    setNewValue(e.target.value);
  }

  return (
    
   <Container className='card_list' >
         
    <Typography sx={{p:3}}>
      Personal Details
    </Typography>
   
    <Grid container spacing={2} >
      
      <Grid item xs={3}>
     
        <TextField
          required
          value={text}
          onChange={handleTextChange}
          id="outlined-required"
          label="name"
          // defaultValue="Hello World"
        />
      </Grid>
      <Grid item xs={3}>
     
        <TextField
          required
          value={newValue}
          onChange={handleUserName}
          id="outlined-required"
          label="username"
          // defaultValue="Hello World"
        />
      </Grid>
      <Grid item xs={3}>
     
        <TextField
          required
          id="outlined-required"
          label="email"
          // defaultValue="Hello World"
        />
      </Grid>
      
    </Grid>
    <p>{text}</p>
    <Button variant="contained" sx={{mt:2}}>Save</Button>
   </Container>
      
  
  );
}
