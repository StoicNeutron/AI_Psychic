import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Earn Token" />
          <Tab label="Give Input" />
          <Tab label="Check Fortune" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three Content
      </CustomTabPanel>
    </>
  );
}

// This is a dummy CustomTabPanel component, you need to define it accordingly
function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <>{children}</>}
    </div>
  );
}

export default App;