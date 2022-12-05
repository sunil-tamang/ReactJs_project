import React,{useState, useEffect} from 'react';
import alumni1  from './Assets/img/alumni-1.png';
import alumni2  from './Assets/img/alumni-2.png';
import Slider from "react-slick";
import './Assets/css/Alumni.css'

function Alumni() {

   const [list, setList] = useState([
        {
          id: 1,
          name: 'Yagnik Patel',
          avatar: alumni1,
          feedback: 'Educators are very passionate about teaching and helping, this is very good platform for learning',  
          //   job : 'Deep Learning Engineer, Samsung, 10 years experience',
          time_spent:'Una Kravets, Web Developer Advocate at Google',
          post_date: '3 March 2021'
        },
        {
          id: 1,
          name: 'Yagnik Patel',
          avatar: alumni2,
          feedback: 'Educators are very passionate about teaching and helping, this is very good platform for learning',  
          //   job : 'Deep Learning Engineer, Samsung, 10 years experience',
          time_spent:'Lex Roman, Growth Designer at Growth Designers',
          post_date: '3 March 2021'
        }

    ]);

    var alumni = [];
    
    for(let i = 0; i < list.length; i++){
        alumni.push(
            <>
                    {/* <div className="alumni-date">
                        <p className="s13"> {list[i].post_date} </p> 
                    </div> */}
                    
                     <div className="alumni-avatar">
                        <img src={list[i].avatar} alt=""/>
                    </div>
                     <div className="alumni-time">
                        <p className="s13 fontb upper">{list[i].time_spent}</p>
                    </div>
                    <div className="alumni-description">
                        <p className="s12">{list[i].feedback}</p>
                    </div>

                   

            </>
        );
    }

    const settings = {
        // dots: true,
        // autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        // centerMode: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           centerMode: false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
           centerMode: false,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           centerMode: false,

          }
        }
      ]
  };
    return (
         <div className="alumni">
               
                <div className="alumni-heading">
                    {/* <p className="s15 fontb c777 upper">Alumni</p> */}
                    <h1 className="s50 fontb">What our Alumni have to say about us !</h1>
                </div>

                <div className="alumni-card__container">
                       <Slider {...settings} className="loli"> 
                            <div className="alumni-card__">
                                {alumni[0]}
                             </div>

                            <div className="alumni-card__">
                                {alumni[1]}
                            </div>

                            <div className="alumni-card__">
                                {alumni[0]}
                            </div>
                            
                            <div className="alumni-card__">
                                {alumni[1]}
                            </div>

                             <div className="alumni-card__">
                                {alumni[0]}
                            </div>
                     </Slider>
                </div>

         </div>

    )
}


export default Alumni
