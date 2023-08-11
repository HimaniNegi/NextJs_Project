"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormPropsTextFields from "@/components/pannel"
import Person2Icon from '@mui/icons-material/Person2';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import QuizIcon from '@mui/icons-material/Quiz';
import BasicAccordion from "@/components/studentEductional"
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
           
          <Person2Icon  sx={{mt:2}}/>
            <Tab label="Profile Details" value="1" />
            <AddHomeWorkIcon sx={{mt:2}}/>
            <Tab label="Educational Details" value="2" />
            <QuizIcon sx={{mt:2}}/>
            <Tab label="Test Scores" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <FormPropsTextFields/>
            </TabPanel>
        <TabPanel value="2"><BasicAccordion/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
