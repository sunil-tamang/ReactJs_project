import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import Course1  from './Assets/img/course-1.jpg';
import Course2 from './Assets/img/course-2.jpg';
import Course3 from './Assets/img/course-3.jpg';
import Course4 from './Assets/img/course-4.jpg';

import './Assets/css/Discover.css'
// import DashboardNav from '../DashboardNav'


function Discover(props) {


const[course, setCourse] =useState([
    {
    id: 0,
    title: 'Engineering Entrance Test',
    category: 'engineering',
    url: '/engineering',
    wid:'100vh',
    tutor:{
        id:0,
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
    category: 'civil services',
    wid:'68vh',
    tutor:{
        id:1,
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 2'
    },
    duration: '3h 36m',
    poster: Course2
    },
        {
    id:2,
    title: 'Mbira illustrations ',
    category:'designing',
    wid:'68vh',
    tutor:{
        id:2,
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 3'
    },
    duration: '3h 36m',
    poster: Course3
    },
        {
    id:3,
    title: 'Mbira illustrations ',
    category: 'coding',
    wid:'68vh',
    tutor:{
        id:3,
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 4'
    },
    duration: '3h 36m',
    poster: Course4
    },
    {
    id:4,
    title: 'Mbira illustrations ',
    category: 'coding',
    wid:'68vh',
    tutor:{
        id:4,
        name:'Jordy Vandeput',
        username:'Jordy',
        dp:'http://placeimg.com/100/100/people?tutor-" + 5'
    },
    duration: '3h 36m',
    poster: Course2
    }
]);

var [filterCourse, setFilteredCourse] = useState(course);   

var courseList = [];

for(let i = 0; i < filterCourse.length; i++){
    courseList.push(

            <Link to={"/dashboard/discover/" + filterCourse[i].id} 
                    className="discover-course" key={"course-" + i} 
                    style={{ 
                    // width: `${filterCourse[i].wid}` ,
                    backgroundImage: `url(${filterCourse[i].poster})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    }}
                    >
                
                {/* <div className="discover__poster" style={{ width: `${filterCourse[i].wid}` }}>
                        <img style={{ width: `${filterCourse[i].wid}` }} src={filterCourse[i].poster} className="" alt=""/>
                </div> */}


                    <div className="discover__detail " 
                        // style={{ width: `${filterCourse[i].wid}` }}
                    >

                        <div className="discover__category">
                                <h1 className="s14 fontb cfff">{filterCourse[i].category}</h1>
                        </div>
                        
                        <div className="course__duration">
                                <p className="s13 fontb cfff">{filterCourse[i].duration}</p>
                            </div>

                        <div className="">
                            <span>
                                <Link> 
                                    <img className="tutor-image" src={filterCourse[i].tutor.dp} alt="" />
                                </Link>
                            </span>
                            <span>
                                <p>{filterCourse[i].tutor.name}</p>
                            </span>
                        </div>

                        <div className="discover-course__title">
                            <h2 className="s15 cfff fontb">{filterCourse[i].title}</h2>
                        </div>

                        <div className="discover-tutor__name">
                            <p className="s13 fontb"></p>
                        </div> 
                
                </div>  
    </Link>

    );
}

const allCategories = ['All', ...new Set(course.map(item => item.category))];

const [buttons, setButtons] = useState(allCategories);
const [isActive, setisActive] = useState('All');


function Button({button, option}){
    return(
        <>
            {button.map((category, index) =>{
                return <ul 
                    className={isActive === category ? 'products-button active' : 'products-button'}
                    onClick={()=> {option(category); setisActive(category); }}>

                    <li>{category}</li>
                        
                </ul>
            })}
        </>
    )}

 const handleClick = (button) => {
       if(button === 'All'){
             setFilteredCourse(course);
           return;
       }
       setFilteredCourse(course.filter(item => item.category === button))
 }




return (
    <div className="discover">
        
        {/* <DashboardNav /> */}


        <div className="discover-button__container"> 
         
            <Button button={buttons}  option={handleClick} />
           
        </div>
        
        <div className="discover__wrapper">

                    <div className="discover__child">
                                {courseList}
                    </div>
                   
            </div>
    </div>
    )
}

export default Discover
