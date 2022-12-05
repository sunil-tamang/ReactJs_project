import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CameraIcon from '@material-ui/icons/Camera';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './Assets/css/ProgramOverview.css'
import one from './Assets/img/one.jpg'
import two from './Assets/img/two.jpg'
import three from './Assets/img/three.jpg'
import four from './Assets/img/four.jpg'

function ProgramOverview() {
    return (
        
               
           
    <div className="program-overview__wrapper">
           
            <div className="program-overview__wrapper__heading">
                <h1 className="s40">About</h1>
                <p>our access to the best of Vidyapeeth</p>
            </div>

            <div className="program-overview">
                <li> 
                    <div className="program-overview__icon"> 
                            <img src={one} alt=""/>
                    </div>  
                    <div className="program-overview__icon--label">
                        <h2 className="">Designed by Exam Experts</h2>
                        <p className="s13">Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on </p>
                        </div>
                </li>
               
                <li>  
                    <div className="program-overview__icon"> 
                            <img src={two} alt=""/>
                    </div>    
                        <div className="program-overview__icon--label">
                            <h2 className="">Live Courses with Study Plan</h2> 
                        <p className="s13">Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on </p>

                    </div>
                </li>
               
                <li>  <div className="program-overview__icon">   
                            <img src={three} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Best Practice & Study Material</h2> 
                           <p className="s13">Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on </p>

                        </div>
                </li> 
               
                 <li>  <div className="program-overview__icon"> 
                        <img src={four} alt=""/>
                        </div>        
                        <div className="program-overview__icon--label">
                            <h2 className="">Free Quizzes by Subject Matter Experts</h2> 
                        <p className="s13">Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on </p>

                        </div>
                </li>
              
             
        </div>

    </div>
          
    )
}

export default ProgramOverview
