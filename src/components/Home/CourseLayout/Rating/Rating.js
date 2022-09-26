import React, {useState, useEffect} from 'react'
import teacher1  from './teacher-1.jpg';
import Slider from "react-slick";
import './Rating.css'
function Rating() {
    const [list, setList] = useState([
        {
          id: 1,
          name: 'Yagnik Patel',
          avatar: teacher1,
          feedback: 'Educators are very passionate about teaching and helping, this is very good platform for learning',  
          //   job : 'Deep Learning Engineer, Samsung, 10 years experience',
          time_spent:'6,810 learning minutes',
          post_date: '3 March 2021'
        },
        {}

    ]);

    var ratingList = [];
    
    for(let i = 0; i < list.length; i++){
        ratingList.push(
            <div className="rating-card">
                    <div className="rating-date">
                        <p className="s13"> {list[i].post_date} </p> 
                    </div>
                    
                    <div className="rating-description">
                        <h1 className="s24">{list[i].feedback}</h1>
                    </div>
                    
                    <div className="rating-avatar">
                        <img src={teacher1} alt=""/>
                        <p className="s20 fontb">{list[i].name}</p>
                    </div>

                    <div className="rating-time">
                        <p className="s13">{list[i].time_spent}</p>
                    </div>

            </div>
        );
    }

    const settings = {
        // dots: true,
        // autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
  };
    return (
         <div className="rating">
                <div className="rating-heading">
                    {/* <p className="s15 fontb c777 upper">Reviews & Ratings</p> */}
                    <h1 className="s32">What our learners have to say about us !</h1>
                </div>

                <div className="rating-card__container">
                       <Slider {...settings}> 
                            <div className="rating-card__">
                                {ratingList[0]}
                            </div>

                            <div className="rating-card__">
                                {ratingList[0]}
                            </div>

                            <div className="rating-card__">
                                {ratingList[0]}
                            </div>
                            
                            <div className="rating-card__">
                                {ratingList[0]}
                            </div>
                     </Slider>
                    
                </div>

         </div>

    )
}

export default Rating
