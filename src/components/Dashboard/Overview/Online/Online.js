import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'

import './Online.css'
import Course1  from './course-1.png';
import Course2 from './course-2.png';


function Online() {
   
    const[OnlineUser, setOnlineUser] = useState([
    {
        id: 0,
        catagory: 'engineering',
        name:'John Doe',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 1',
        duration: '3h 36m',
        poster: Course1
        },
         {
        id:1,
        catagory: 'civil services',
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 2',
        duration: '3h 36m',
        poster: Course2
        },
         {
        id:1,
        catagory: 'civil services',
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 3',
        duration: '3h 36m',
        poster: Course2
        },
         {
        id:1,
        catagory: 'civil services',
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 4',
        duration: '3h 36m',
        poster: Course2
        },
         {
        id:1,
        catagory: 'civil services',
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 5',
        duration: '3h 36m',
        poster: Course2
        }
]);

var UserList = [];
        for(let i = 0; i < OnlineUser.length; i++){
            UserList.push(
                    <div className="online-users-image ">
                        <img src={OnlineUser[i].dp} alt="" />
                    </div>
            )
        }

    return (
        <div className="online-users">

                {/* <div className="online-users-heading">
                    <h1 className="s14"> Streaming Now</h1>
                </div> */}

                <div className="online-users-list flex aic">
                        {UserList}
                </div>
        </div>
    )
}

export default Online
