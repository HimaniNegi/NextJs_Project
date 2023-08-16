import React from 'react'
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container, Button, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { Label } from '@mui/icons-material';


const Visa = () => {

    const [personName, setPersonName] = React.useState([]);

    const [radio, setRedio] = useState("no");

    const [radioNew, setradioNew] = useState("yes");

    const [selectedValue, setSelectedValue] = useState('no');

    const handleChanges = (event) => {
        setSelectedValue(event.target.value);
    };

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
        <>
            <Grid container sx={{ backgroundColor: "#80808052", p: 2, mb: 2, borderRadius: 3 }}>
                <Typography>
                    Visa & Student Permit Details
                </Typography>

            </Grid>
            <Grid sx={{ pl: 2 }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Have you ever been refused a visa for any country in the last 10 years?*</FormLabel>
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
            {selectedValue === 'yes' ?

            <Grid sx={{ mt: 4 }}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Have You Graduated from this School?</FormLabel>

                <RadioGroup

                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="selection" value={selectedValue} onChange={handleChanges}
                >
                    <FormControlLabel value={radio} control={<Radio />} label="Canadian Study Permit/Visa" name="Canadian Study Permit/Visa" />
                    <FormControlLabel value={radioNew} control={<Radio />} label="Australian Study Visa" name="Australian Study Visa" />
                    <FormControlLabel value={radioNew} control={<Radio />} label="YeUSA F1 Visas" name="USA F1 Visa" />
                    <FormControlLabel value={radioNew} control={<Radio />} label="UK Tier 4 Student/ Study Visa" name="UK Tier 4 Student/ Study Visa" />
                    <FormControlLabel value={radioNew} control={<Radio />} label="Irish Stamp 2" name="Irish Stamp 2" />
                    <FormControlLabel value={radioNew} control={<Radio />} label="I do not have Visa" name="I do not have Visa" />

                </RadioGroup>
            </FormControl>
        </Grid>
            
            :
            <>
           
                <Grid sx={{ py: 2 }}>
                        <Typography>Counrty</Typography>
                        <FormControl sx={{ width: 462, height: 40 }}>

                            <InputLabel id="demo-multiple-name-label">Educational Level</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                            >

                                <MenuItem
                                >
                                    person
                                </MenuItem>

                            </Select>
                        </FormControl>
                    </Grid><Grid sx={{ py: 3, pt: 3 }}>
                        <TextField sx={{ width: 462 }}>

                        </TextField>
                    </Grid><Grid sx={{ mt: 4 }}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Have You Graduated from this School?</FormLabel>

                            <RadioGroup

                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="selection" value={selectedValue} onChange={handleChanges}
                            >
                                <FormControlLabel control={<Radio />} label="Canadian Study Permit/Visa" name="Canadian Study Permit/Visa" />
                                <FormControlLabel  control={<Radio />} label="Australian Study Visa" name="Australian Study Visa" />
                                <FormControlLabel  control={<Radio />} label="YeUSA F1 Visas" name="USA F1 Visa" />
                                <FormControlLabel  control={<Radio />} label="UK Tier 4 Student/ Study Visa" name="UK Tier 4 Student/ Study Visa" />
                                <FormControlLabel  control={<Radio />} label="Irish Stamp 2" name="Irish Stamp 2" />
                                <FormControlLabel  control={<Radio />} label="I do not have Visa" name="I do not have Visa" />

                            </RadioGroup>
                        </FormControl>
                    </Grid></>
}
        </>
    )
}

export default Visa
