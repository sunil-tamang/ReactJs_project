import React from 'react'
import './Settings.css'

import Profile from './Profile/Profile'
import Account from './Account/Account'
import Nortification from './Nortification/Nortification'
// import DashboardNav from '../DashboardNav'

import { Typography } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from  '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div style={{ backgroundColor:'#dfdadac4', width: '700px', padding:'1em',borderRadius:'8px' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}


function Settings() {

 const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
return (
  <fragment>
        
        {/* <DashboardNav /> */}

 
    <div className="nortication">

          <Tabs orientation="vertical"
            value={value}
            onChange={handleChange}
          >
            <Tab label="Profile" />
            <Tab label="Account"  />
            {/* <Tab label="Nortification"  /> */}

          </Tabs>
        
          <TabPanel value={value} index={0}>
                <Profile />
          </TabPanel>
        
          <TabPanel value={value} index={1}>
                <Account />
          </TabPanel>
        
    </div>
   </fragment>     
    )
}

export default Settings
