import React, {useState,useEffect} from 'react'

import './Assets/css/Feature.css'
import one from './Assets/img/one.jpg'
import two from './Assets/img/two.jpg'
import three from './Assets/img/three.jpg'
import four from './Assets/img/four.jpg'

function Rating() {
    return (
               <div className="program-overview__wrapper">
            <div className="program-overview__wrapper__heading">
                <h1 className="s40">Feature</h1>
                <p>our access to the best of Vidyapeeth</p>
            </div>

            <div className="program-overview">
                <li> 
                    <div className="program-overview__icon"> 
                            <img src={one} alt=""/>
                    </div>  
                    <div className="program-overview__icon--label">
                        <h2 className="">Schedule that works for you</h2>
                        <p className="s13">Enroll in unlimited courses, get a personalised schedule and never miss a live class with our timely reminders</p>
                        </div>
                </li>
               
                <li>  
                    <div className="program-overview__icon"> 
                            <img src={two} alt=""/>
                    </div>    
                        <div className="program-overview__icon--label">
                            <h2 className="">No Language barrier</h2> 
                        <p className="s13">Our educators teach in English, Hindi, Malayalam, Tamil and 12 other languages, so language is never a barrier</p>

                    </div>
                </li>
               
                <li>  <div className="program-overview__icon">   
                            <img src={three} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Learn anytime, anywhere</h2> 
                        <p className="s13">Watch our recorded classes, online or offline from the comfort of your mobile, PC or tablet Feels like you are in </p>

                        </div>
                </li> 
               
                 <li>  
                     <div className="program-overview__icon"> 
                        <img src={four} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Interact with your educator</h2> 
                            <p className="s13">Chat with the educator, engage in discussions and ask your questions - all while the class is going on</p>

                        </div>
                </li>
                   <li>  
                     <div className="program-overview__icon"> 
                        <img src={two} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Answer live polls</h2> 
                            <p className="s13">Participate in live polls by the educator in class and compete for a place in the leaderboard</p>

                        </div>
                </li>
                   <li>  
                     <div className="program-overview__icon"> 
                        <img src={three} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Get your doubts cleared</h2> 
                            <p className="s13">Ask your doubts and get them answered immediately by the educator during classes</p>

                        </div>
                </li>
              
             
        </div>

    </div>
    )
}

export default Rating
