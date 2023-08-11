"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import { Container, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const Field = () => {
    const [text, setText] = useState([]);

    const [newValue, setNewValue] = useState([]);

    const [personName, setPersonName] = React.useState([]);

    const [radio, setRedio] = useState("no");

    const [radioNew, setradioNew] = useState("yes");

    const [selectedValue, setSelectedValue] = useState('no');

    const handleChanges = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleUserName = (e) => {
        setNewValue(e.target.value);
    }

    const handleRadio = (e) => {
        setRedio(e.target.value);
    }

    const handleRadioNew = (e) => {
        setradioNew(e.target.value);
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Container className='card_list' >

            <Typography sx={{ p: 3 }}>
                Student History
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
                <Grid item xs={3}>
                    <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-multiple-name-label">Educational Level </InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                        // MenuProps={MenuProps}
                        >

                            <MenuItem

                            // style={getStyles(name, personName, theme)}
                            >
                                person
                            </MenuItem>

                        </Select>
                    </FormControl>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{ pt: 2, pb: 2 }}>

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
                <Grid item xs={3}>
                    {/* <Typography>Expected To</Typography> */}
                    {/* {radioNew == "yes" ? <Typography>Attended To</Typography>:null} */}
                    {selectedValue === 'no' && <div>Expected To</div>}
                    {selectedValue === 'yes' && <div>Attended To</div>}
                    <FormControl sx={{ width: 200 }}>

                        <InputLabel id="demo-multiple-name-label">Educational Level</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                        // MenuProps={MenuProps}
                        >

                            <MenuItem
                            // style={getStyles(name, personName, theme)}
                            >
                                person
                            </MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid sx={{ mt: 2, pl: 2 }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Have You Graduated from this School?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="selection" value={selectedValue} onChange={handleChanges}
                        >
                            <FormControlLabel value={radio} control={<Radio />} label="No" name="No" />
                            <FormControlLabel value={radioNew} control={<Radio />} label="Yes" name="Yes" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Button variant="contained" sx={{ mt: 2 }}>Save</Button>
        </Container>
    )
}

export default Field;
