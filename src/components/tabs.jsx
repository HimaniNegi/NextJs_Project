"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnhancedTable from "@/components/table";
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import AddchartTwoToneIcon from '@mui/icons-material/AddchartTwoTone';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={4} md={4}  >
          {/* <Item>xs=6 md=8</Item> */}
          <Card sx={{ minWidth: 275 }} style={{ background: '#f9f5fe' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <AddPhotoAlternateTwoToneIcon/>
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Review
        </Typography>
        <Typography variant="body2">
         12
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
      
    </Card>
        </Grid>
        <Grid item xs={4} md={4}  >
          {/* <Item>xs=6 md=8</Item> */}
          <Card sx={{ minWidth: 275 }} style={{ background: '#f9f5fe' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <AddchartTwoToneIcon/>
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Need Action
        </Typography>
        <Typography variant="body2">
         34
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
      
    </Card>
        </Grid>
        <Grid item xs={4} md={4}  >
          {/* <Item>xs=6 md=8</Item> */}
          <Card sx={{ minWidth: 275 }} style={{ background: '#f9f5fe' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <AddTaskTwoToneIcon/>
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Submitted To University
        </Typography>
        <Typography variant="body2">
         54
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
      
    </Card>
        </Grid>
       
      </Grid>
    </Box>
      <CustomTabPanel value={value} index={0}>
      <EnhancedTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <EnhancedTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <EnhancedTable/>
      </CustomTabPanel>
    </Box>
  );
}
