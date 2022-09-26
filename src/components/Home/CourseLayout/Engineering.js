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

import banner from './banner.jpg'
import Scroll from '../Hooks/Scroll'

import Form from './Form/Form.js';
import Rating from './Rating/Rating.js';

import './Style.css'
function Engineering() {

     return (
    <div className="container">
       
        <Scroll /> {/* Reset Scroll*/}

        <Banner 
        name="CMAT/Engineering Entrance Test" 
        excerpt ="In this course, Madhukar Kotawe will discuss Environment & Ecology in detail. This course will be beneficial for aspirants preparing for UPSC CSE. The course will be conducted in Hindi and notes will be provided...  "
        excerpt1 ="the course will be conducted in Hindi and notes will be provided...  "
        subject1='Physics'
        subject2='Chemistry'
        subject3='Mathematics'
        subject4='English'
        language1='English'
        language2='NEPALESE'
        launch_date='Started on Mar 24'
        lessons='27 lessons'
        image={banner}
        url='fcNSpduaAKA'
        // src="x2to0hs"
        />
        

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

export default Engineering
