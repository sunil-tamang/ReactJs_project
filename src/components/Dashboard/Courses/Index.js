import React, {useState, useEffect,}from 'react';
import {Link} from 'react-router-dom'

import './Assets/css/Index.css'

import Course1  from './Assets/img/course-1.jpg';
import Course2 from './Assets/img/course-2.jpg';
import Course3 from './Assets/img/course-3.png';
import Course4 from './Assets/img/course-4.png';

// import DashboardNav from '../DashboardNav'

function MyCourses() {
      
const[course, setCourse] =useState([
        {
        id: 0,
        title: 'Engineering Entrance Test',
        catagory: 'engineering',
        url: 'engineering',
        tutor:{
            id:1,
            name:'Jordy Vandeput',
            username:'Jordy',
            dp:'http://placeimg.com/100/100/people?tutor-" + 1'
        },
        duration: '3h 36m',
        poster: Course1
        },
         {
        id:1,
        title: 'Medical Entrance Test',
        catagory: 'civil services',
        url: 'medical',

        tutor:{
            id:1,
            name:'Jordy Vandeput',
            username:'Jordy',
            dp:'http://placeimg.com/100/100/people?tutor-" + 1'
        },
        duration: '3h 36m',
        poster: Course2
        }
    ]);
    
    useEffect(() => {
        setFilteredCourse(course);
    },[]);

var [filterCourse, setFilteredCourse] = useState([]);

var courseList = [];

    for(let i = 0; i < filterCourse.length; i++){
        courseList.push(

            <Link to={"/dashboard" + filterCourse[i].id} className="user-courses-discover" key={"course-" + i}>
                 
                  <div className="user-courses__poster">
                      <img src={filterCourse[i].poster} className="bl" alt=""/>
                  </div>

                  <div className="user-courses__detail ">
                   
                        <div className="user-courses__duration">
                            <p className="s13">{filterCourse[i].duration}</p>
                        </div> 
                        
                        <div className="user-courses__title">
                            <h2 className="s20">{filterCourse[i].title}</h2>
                        </div>

                        <div className="user-courses-tutor__name">
                            <p className="s13 fontb">{filterCourse[i].tutor.name}</p>
                        </div> 
                  </div>  
            </Link>
 

        );
    }



    return (
     <div className="user-courses__wrapper">

            {/* <DashboardNav /> */}

          <div className="user-courses__child flex rdir">
              {courseList}
          </div>
    </div>
    )
}

export default MyCourses
