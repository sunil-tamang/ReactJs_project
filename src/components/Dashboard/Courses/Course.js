import React, {useState, useEffect,}from 'react';
import {BrowserRouter as Router, Switch, Route, Link , NavLink} from 'react-router-dom';

import './Assets/css/Course.css'

import Course1  from './Assets/img/course-1.jpg';
import Course2 from './Assets/img/course-2.jpg';

// import DashboardNav from '../../DashboardNav'


function Course() {

    const[course, setCourse] =useState([
            {
            id: 0,
            title: 'Mathematics',
            tutor:{
                id:1,
                name:'Jordy Vandeput',
                username:'Jordy',
            },
            poster: Course1
            },
            
            

        ]);
        
     var [filterCourse, setFilteredCourse] = useState(course);    
    
     var courseList = [];
   
     for(let i = 0; i < filterCourse.length; i++){
        courseList.push(

            <Link to="/course" className="course-item" key={"course-" + i}
            style={{
              // backgroundImage: '',
              // backgroundImage: `url(${filterCourse[i].poster})`,
              // backgroundPosition:'center',
              // backgroundSize:'cover',
              // backgroundRepeat:'no-repeat',
            }}
            >
                       <div className="flex aic">
                            <img style={{width: '100px', height:'100px'}} src={filterCourse[i].poster} className="bl" alt=""/>
                            <h2 className="s15 fontb cfff">{filterCourse[i].title}</h2>

                        </div>

                        <div className="__title">
                             
                        </div>

                        
            </Link>
 

        );
    }

    return (
        <div className="course-page">
            {/* <DashboardNav /> */}

            <div className="flex gap">
                {courseList}
            </div>
        </div>
    )
}

export default Course
