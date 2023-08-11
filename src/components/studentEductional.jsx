"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Field from "@/components/accordianFields"


export default function BasicAccordion() {
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add Educational History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Field/>
         
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
