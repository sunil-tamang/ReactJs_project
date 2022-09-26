import React, {useState, useEffect,}from 'react';
import {BrowserRouter as Router, Switch, Route, Link , NavLink} from 'react-router-dom';
import './Assets/css/Products.css';

import Course1  from './Assets/images/course-1.png';
import Course2 from './Assets/images/course-2.png';
import Course3 from './Assets/images/course-3.png';
import Course4 from './Assets/images/course-4.png';

// import covid from './Assets/img/covid.svg';


export default function Products() {
  
  
  const[course, setCourse] =useState([
    {
    id: 0,
    title: 'Engineering Entrance Test',
    catagory: 'Engineering',
    url: '/engineering',
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
    catagory: 'Services',
    url: '/medical',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course2
    },
    {
    id:2,
    title: 'Public Service Comimission',
    catagory:'Designing',
     url: '/engineering',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course3
    },
    {
    id:3,
    title: 'Bank Exam Preparation',
    catagory: 'Coding',
     url: '/engineering',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course4
    },
    {
    id:3,
    title: 'LSA Exam Preparation',
    catagory: 'Coding',
     url: '/engineering',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course4
    },
    {
    id:3,
    title: 'CDS/AFCAT/CAPF',
    catagory: 'Defence',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course4
    },
    {
    id:3,
    title: 'Services Selection Board (SSB)',
    catagory: 'Defence',
    tutor:{
      id:1,
      name:'Jordy Vandeput',
      username:'Jordy',
      dp:'http://placeimg.com/100/100/people?tutor-" + 1'
    },
    duration: '3h 36m',
    poster: Course4
    }
    ]);
  
  
    // useEffect(() => {
    //           setFilteredCourse(course);
    //           // setFilteredCourse(course.filter(item => item.catagory ===  'defence'));
    //   },[]);

  
    var [filterCourse, setFilteredCourse] = useState(course);    
    
     var courseList = [];
     for(let i = 0; i < filterCourse.length; i++){
        courseList.push(

            <Link to={filterCourse[i].url} className="course" key={"course-" + i}
            style={{
              // backgroundImage: '',
              // backgroundImage: `url(${filterCourse[i].poster})`,
              // backgroundPosition:'center',
              // backgroundSize:'cover',
              // backgroundRepeat:'no-repeat',
            }}
            >
                 
                  {/* <div className="poster ">
                      <img src={filterCourse[i].poster} className="bl" alt=""/>
                  </div> */}

                  <div className="course__detail ">
                   
                        {/* <div className="course__duration">
                            <p className="s13">{filterCourse[i].duration}</p>
                        </div>  */}
                      <div className="">
                            <img style={{width: '100px', height:'100px'}} src={filterCourse[i].poster} className="bl" alt=""/>
                        </div>
                        <div className="course__title">
                            <h2 className="s15 fontb">{filterCourse[i].title}</h2>
                        </div>

                        <div className="tutor__name flex btw">
                            <p className="s10 ">{filterCourse[i].tutor.name}</p>
                            <p className="s10 ">{filterCourse[i].duration}</p>
                        </div> 
                  </div>  
            </Link>
 

        );
    }

    
    // get items catagory from course 
    const allCategories = ['All', ...new Set(course.map(item => item.catagory))];
        
    const [buttons, setButtons] =useState(allCategories);

    const [isActive, setIsActive] = useState('All');
    

    function Button({button, option}){
      
      
      return(
            <>

            {button.map((catagory, i) => {
                      return <ul className={isActive === catagory ? 'products-button active' : 'products-button'}  
                                  onClick={ ()=> {option(catagory); setIsActive(catagory); }} >

                                <li>
                                    {catagory} 
                                </li>
                                <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="icon">
                                        <path fill="#554d56" fill-rule="evenodd" d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path></svg>
                                </span>
      
                        </ul>
                      })}
                </>
            )}
      
      const handleClick = (button) =>{
        // if button === All  show all courses
          if(button === 'All'){
            
            setFilteredCourse(course);
            // console.log(course);

            return;
          }
          //  show courses where course catagory is equal to button clicked
           setFilteredCourse(course.filter(item => item.catagory ===  button)) 
        
      }

    
return (
  <>     
           
    <div className="products-container"> 
           
            <div className="products-button__container ">
           
               <Button  button={buttons} option={handleClick} />
           
           </div>
          

           <div className="products__wrapper">
            
              <div className="products"> {courseList} </div>
          
          </div>

            
   
    </div>
     
</>
    )
}
 
















