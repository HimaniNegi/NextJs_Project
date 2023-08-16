"use client"
import React from 'react'
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { Container,Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';


const Tests = () => {
    const [text, setText] = useState([]);
    const [newValue,setNewValue] = useState([]);
    const [value, setValue] = useState([]);

    const handleTextChange = (event) => {
        setText(event.target.value);
      };
    
      const handleUserName = (e) => {
        setNewValue(e.target.value);
      }
      const handleClick = () => {
        setValue([...value, <RestoreFromTrashIcon onClick={() => handleClick(value.length)} />]);
      }

    //   const handleClear = () => {
    //     setValue([]);
    //   };
    const handleClear = (index) => {
        const newIcons = [...value];
    newIcons.splice(index, 1);
    setValue(newIcons);
      };

  return (
    <>
  
    <Grid container sx={{display:"flex" , justifyContent:"space-between" , backgroundColor:"#80808052" , p:2, mb:2, borderRadius:3}}>
        <Typography>
            Test Scores
        </Typography>
    <AddCircleOutlineIcon
       onClick={handleClick}
    />
    </Grid>
    {value?.map((_, index) => (
    <><Grid key={index} container  sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#80808052", p: 2, borderRadius: 3 }}>
                  <Typography>
                      Test Scores
                  </Typography>
                  <RestoreFromTrashIcon onClick={() => handleClear(index)} />

              </Grid><Container className='card_list'>

                      <Typography sx={{ p: 3 }}>
                          Personal Details
                      </Typography>

                      <Grid container spacing={2}>

                          <Grid item xs={3}>

                              <TextField
                                  required
                                  value={text}
                                  onChange={handleTextChange}
                                  id="outlined-required"
                                  label="name" />
                          </Grid>
                          <Grid item xs={3}>

                              <TextField
                                  required
                                  value={newValue}
                                  onChange={handleUserName}
                                  id="outlined-required"
                                  label="username" />
                          </Grid>
                          <Grid item xs={3}>

                              <TextField
                                  required
                                  id="outlined-required"
                                  label="email" />
                          </Grid>

                      </Grid>
                      <p>{text}</p>
                      <Button variant="contained" sx={{ mt: 2 }}>Save</Button>
                  </Container></>
 ))}
   </>
  )
}

export default Tests;
