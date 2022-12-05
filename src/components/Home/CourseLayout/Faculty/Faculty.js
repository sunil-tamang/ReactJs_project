import React,{useState, useEffect} from 'react';
import './Assets/css/Faculty.css'

import teacher1  from './Assets/img/teacher-1.jpg';
import teacher2  from './Assets/img/teacher-2.jpg';
import teacher3 from './Assets/img/teacher-3.jpg';
import teacher4 from './Assets/img/teacher-4.jpg';
import teacher5 from './Assets/img/teacher-5.jpg';
import next from './Assets/img/next.svg'
import Slider from "react-slick";

function Faculty() {

    const [faculty, setfaculty] = useState([
        {
          id: 1,
          name: 'Prof. Dr. Ram Kumar Sharma',
          text: 'IOE - TU, Pulchowk Campus',  
          career : 'Instructor',
          poster: teacher1
        },
         {
          id: 2,
          name: 'Mr. Manoj Kumar Prasad',
          text: 'TU, Amrit Campus',
          career: 'Teaching',
          poster: teacher2
        },

         {
          id: 3,
          name: 'Mr. Kuber Adhikari',
          text: 'MAT/IQ Expert',
          career: 'Instructor',
          poster: teacher3
        },
         {
          id: 4,
          name: 'Mr. Abdhesh Jha',
          text: 'Central Department of Zoology, TU',
          career: 'Teaching',
          poster: teacher4
        },

        {
          id: 5,
          name: 'Mr. Kamal Adhikari',
          text: 'Senior Faculty of Botany',
          career: 'Teaching',
          poster: teacher5
        }

    ]);


    var facultyList = [];

        for(let i = 0; i < faculty.length; i++){
            facultyList.push(
                
                    <div className="faculty-card" >
                           
                             <div className="faculty-background"
                                  style={{  
                                  backgroundImage: "url(" + faculty[i].poster + ")",
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  borderRadius: '8px',
                                  }}>
                                {/* <img src={faculty[i].poster} alt=""/> */}
                                
                            </div>
                            

                            <div className="faculty-text">
                                    <p className="s18">{faculty[i].name}</p>    
                                    <p className="s10">{faculty[i].text}</p>    
                                    {/* <p className="s14">{faculty[i].career}</p>   */}
                            </div>

                           


                    </div>
            
            );
        }



function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", visibility: "hidden" , background: "green" }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className,  arrow, style, onClick } = props;
  return (
    <div
        className={className}
        id='abc'
        onClick={onClick} >
         <img src={next} style={{width: "30px", height: "30px"}}  alt="" />
    </div>
  );
}

const settings = {
        // dots: true,
        // autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        // centerMode: true
  };
    return (
        <div className="faculty">
             
              <div className="faculty-heading">
               
               <div>
                 {/* <h1 className="s40 fontb c333">Prepare with Top Educators</h1> */}
                 <h1 className="s50 fontb">Prepare with Top Educators</h1>
                <p>Access to Nepal's best educators is just a subscription away</p>
              </div>

               {/* <div>
                     <div className="buttons">View All </div>
                </div> */}
      
              </div>
                
                <div className="wooper">
                  <Slider {...settings}> 
                  
                  <div className="faculty-card__container"> {facultyList[0]} </div>
                  <div className="faculty-card__container"> {facultyList[1]} </div>
                  <div className="faculty-card__container"> {facultyList[2]} </div>
                  <div className="faculty-card__container"> {facultyList[3]} </div>
                  <div className="faculty-card__container"> {facultyList[1]} </div>
                  <div className="faculty-card__container"> {facultyList[4]} </div>

                  </Slider>
              </div>
        </div>
    )
}

export default Faculty
