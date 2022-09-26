import React, {useState} from 'react'
import './Assets/css/AdmissionProcess.css'
import Slider from "react-slick";

function AdmissionProcess() {
    const [list,setList] = useState([
        {
          id: 1,
          title: 'Step 1 : Take the online  Eligiblity Test',
          text: 'Complete your application to take the 17 minute online eligibility test to kick-start the admission process. The test is designed to assess your quantitative logical aptitude ensuring you re ready for the program.',  
        //   poster: Course1
        },
         {
          id: 2,
          title: 'Step 2: Get Shortlisted & Receive your Offer Letter',
          text: 'Complete your application to take the 17 minute online eligibility test to kick-start the admission process. The test is designed to assess your quantitative logical aptitude ensuring you re ready for the program.',
        //   poster: Course2
        },
         {
          id: 3,
          title: 'Step 3: Security Code',
          text: 'Complete your application to take the 17 minute online eligibility test to kick-start the admission process. The test is designed to assess your quantitative logical aptitude ensuring you re ready for the program.',
        //   poster: Course3
        },

          {
          id: 4,
          title: 'Step:4 Fast Smart',
          text: 'Complete your application to take the 17 minute online eligibility test to kick-start the admission process. The test is designed to assess your quantitative logical aptitude ensuring you re ready for the program.',
        //   poster: Course3
        }
     
    ])

    var subList = [];
    for(let i = 0; i < list.length; i++){
        subList.push(

                        <div className="admission__process--one">
                            <h5 className="s18 fontb">{list[i].title}</h5> 
                            <p className="s13">{list[i].text}</p>   
                        </div>          
             
            
        )
    }

    
   const settings = {
        // dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
  };

    return (
         
                <div className="admisson-process__wrapper" >
                       
                        <div className="admisson-process__heading">
                             <h1 className="s50 fontb">Admisson Process</h1>
                             <p>There are 4 simple steps in the Admission Process which is detailed below:</p>
                        </div>    
                        
                         <div className="admission">      
                               
                                <div className="admisson__process">

                                        {subList}

                                </div>
                        </div>
                         {/* <h5>There are 3 simple steps in the
                             Admission Process which is detailed below:</h5> */}
      
                    {/* <div className="admisson__process">
                         
                        <div className="admission__process--one">
                            <h5 className="s18">Step 1 : take the online  Eligiblity Test</h5> 
                            <p className="s13">Complete your application to take the 17
                                minute online eligibility test to kick-start 
                                the admission process. 
                                The test is designed to assess your 
                                quantitative &amp; logical aptitude 
                                ensuring you're ready for the program.
                            </p>   
                        </div>          
                        <div className="admission__process--two">
                            <h5 className="s18">Step 2: Get Shortlisted & Receive your Offer Letter</h5>
                            <p className="s13">Our Admissions Committee will review your test
                            score &amp; profile. Upon qualifying, an Offer
                            Letter will be sent to you confirming your
                            admission to the PG Diploma in Data Science. 
                            </p>
                         </div>          
                        <div className="admission__process--three">
                            <h5 className="s18">Step 3: Block your Seat & Begin the Prep Course</h5>
                            <p className="s13">Block your seat with a payment of INR 25,000 
                            to enroll into the program. Begin with your Prep
                            course and start your Data Science journey!
                            </p>
                         </div>          
                      
                      </div> */}
                </div>

    )
}

export default AdmissionProcess
