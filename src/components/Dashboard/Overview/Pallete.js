import React, {useState, useEffect} from 'react'
import './Pallete.css'

import user from './user.jpg'



function Pallete() {

const [username, setUsername] = useState([
    {
      id:1,
      name: 'Anna',
      value: '80',
      avatar:  user
    },
]);

var usernameList = [];
    
for(let i = 0; i < username.length; i++){
        usernameList.push(

            <div className="pallete-wrapper">
                <h1>Welcome back !{username[i].name}</h1>
                <p>You have learned {username[i].value}% of your goal this week !</p>
                <p>Start a new goal and improe yourself</p>
                <img width="100px" height="100px" src={username[i].avatar} alt="" />
            </div>
        );
    }



return (
        <div className="pallete">
            {usernameList}
        </div>
    )
}

export default Pallete
