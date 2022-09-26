import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import './DashboardNav.css'

import MicIcon from '@material-ui/icons/Mic';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HeadsetIcon from '@material-ui/icons/Headset';

import { Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function LongMenu() {

    const ITEM_HEIGHT = 100;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

//  Logout Function
  function logout (){
      return (
          <>
  
          </>
      )
  }
  return (
    <fragment>
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick} >
         <MoreVertIcon />
      </IconButton>
            
            <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
                PaperProps={{
                 style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '15ch',
                            marginLeft: '-5ch',
                            marginTop: '6ch',
                        },
                }}
            >
                <MenuItem  onClick={handleClose}>
                        <Link to={logout} className="padd">Logout</Link>
                </MenuItem>
            </Menu>
    </fragment>
  );
}


function Userprofile(){
      const [user, setUser] = useState([
        {
            id:1,
            name:'John Doe',
            username:'@johndoe',
            email:'johndoe123@gmail.com',
            profile: 'http://placeimg.com/100/100/people?tutor-" + 1'
        }
    ]);
    
    var Userprofile = [];
    for (let i = 0; i < user.length; i++){
        Userprofile.push(
        <div className="dashboard-user-profile">
            
             <div className="profile-circle">
                <img src={user[i].profile} alt=""/>
            </div>

            <div className="profile-username">
                <p className="s15 c333 fontb">{user[i].name} </p>
                <p className="s10 c333">{user[i].username}</p>
            </div>

        </div>
        )
    }
    
    return(
            <Fragment>
                      {Userprofile} 
            </Fragment>
    )
}


function DashboardNav() {
    
    return (
           
                <div className="dashboard-header">
                    <Userprofile />
                    <LongMenu />
                 </div> 
    )
}

export default DashboardNav
