import React,{useState,useRef,forwardRef, useEffect} from 'react'
import Banner from './Banner/Banner.js';
import ProgramOverview from './ProgramOverview/ProgramOverview.js';
import Accordian from './Accordian/Accordian.js';
import AdmissionProcess from './AdmissionProcess/AdmissionProcess.js';
import Feature from './Feature/Feature.js';
import Faculty from './Faculty/Faculty.js';
import Package from './Package/Package';
import Alumni from './Alumni/Alumni';
import Download from './Download/Download'
import Faq from './Faq/Faq.js';

import photo from './banner.jpg'
import Scroll from '../Hooks/Scroll'

import Form from './Form/Form.js';
import Rating from './Rating/Rating.js';

import './Style.css'


function Medical() {

    return (
    <div className="container">
       
        <Scroll /> {/* Reset Scroll*/}
       
        <Banner 
        name="Medical Entrance Test Prep" 
        excerpt ="In this course, Shubham Gupta will provide in-depth knowledge of the Environment. The course will be helpful for aspirants preparing for UPSC CSE. Learners at any stage of their preparation will be benefited from the course. All doubts related to the topic will be clarified during the doubt clearing sessions in the course"
        subject1='Physics'
        subject2='Chemistry'
        subject3='Zoology'
        subject4='Botany'
        language1='English'
        language2='NEPALESE'
        launch_date='Started on Mar 24'
        lessons='27 lessons, 1 quiz'
        image={photo} 
        url='fcNSpduaAKA'
        />
        
        {/* <StickyNavBar /> */}
        <ProgramOverview /> 

        <Accordian /> 
                
        <AdmissionProcess /> 

        <Feature /> 

        <Faculty /> 
                
        <Package />  

        {/* <Form  />   */}
        
        {/* <Rating />*/}

        <Alumni/>   

        <Download /> 

        <Faq />  
      
    </div>
    )
}

export default Medical
