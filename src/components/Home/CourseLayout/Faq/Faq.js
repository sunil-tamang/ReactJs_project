import React,{useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import './Assets/css/Faq.css'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Popup from '../../Hooks/Popup'

const Accordion = withStyles({
  root: {
     backgroundColor: 'transparent',
    // border: '1px solid rgba(0, 0, 0, .125)',
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: '1em 2em',

    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // border: '1px solid rgba(0, 0, 0, .125)',
    // borderRadius: '10px',
    marginTop:'0',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',
    // borderBottom: '1px solid #1d1515',
  },
}))(MuiAccordionDetails);

function Faq() {

  const [list, setList] = useState(
  [
    {
      id: 1,
      heading : 'Course Curriculum',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "What is Plus Subscription?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'Plus Subscription gives you access to all live courses and quizzes launched every month within the goal you have subscribed for. Plus subscription is available for 1 month, 3 months, 6 months and 12 months.',
                                        }
                                        
                                    ]
                      },
                      {
                      id:2,
                      sub_heading: "What are the benefits of this subscription?",
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'You will get access to comprehensive live courses and quizzes by top Educators. This will allow you to evaluate your learning and measure your progress. Additionally, you can participate in doubt-clearing sessions with the Educators and get your queries resolved.'
                                        }
                                    ]
                      },
                        {
                      id:3,
                      sub_heading: "Can I enroll in a course if it has already started?",
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Yes. You can enroll in any course before its end date. The class recordings will be available for you on the course page so that you can cover the missed lessons and quizzes.'
                                        }
                                    ]
                      },
                      {
                      id:4,
                      sub_heading: "Can I pay the subscription fee on a monthly basis?",
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Yes, we have EMI options available for all subscription plans. Once you have chosen your preferred subscription plan, proceed to payment and choose EMI as the payment option.'
                                        }
                                    ]
                      },
                       {
                      id:5,
                      sub_heading: 'Can I download courses and watch them offline later?',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Yes. After every live lesson, recordings will be made available for download. You can watch this later, even when you are offline.'
                                        }
                                    ]
                      }
                   ]
    },
    {
      id: 1,
      heading : 'What are the benefits of this subscription? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
     {
      id: 2,
      heading : 'Is there a limit to the number of courses I can access as part of this subscription? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
     {
      id: 3,
      heading : 'Can I enroll in a course if it has already started? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
     {
      id: 4,
      heading : 'Can I pay the subscription fee on a monthly basis? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
    {
      id: 5,
      heading : 'Can I download courses and watch them offline later? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
    {
      id: 6,
      heading : 'What happens when my subscription expires? ',  
          sub_list:[
                      {
                      id:1,
                      sub_heading: "Why is the subscription paid?",
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'The educators on Vidyapeeth Plus are subject matter experts that put in a significant amount of their time and effort in preparing the courses, resolving doubts in the classroom and guiding you along your learning journey. In order to compensate them and to maintain the tech infrastructure that is required to conduct their live courses seamlessly, we charge a subscription fee',
                                        }
                                        
                                    ]
                      }
                    ]
    },
    
  ]   
);



const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
    var syllabusList =[];
      for(let i = 0; i < list.length; i++) {
            syllabusList.push(
          <Accordion >
        
                <AccordionSummary 
                  aria-controls="panel1d-content"
                  id="panel1d-header" 
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header">
                  <div className="accordian__details">
                    <h4 className="s20 fontb">{list[i].heading}</h4>
                </div>
                </AccordionSummary>
                  
                  <AccordionDetails>
                         {list[i].sub_list.map(( sub) => 
                          <Accordion>
                                <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    expandIcon={<ExpandMoreIcon />}>

                                    <div className="accordian__details">
                                        <h5 className="fontb">
                                            {sub.sub_heading}
                                        </h5>
                                        
                                    </div>

                                </AccordionSummary>

                                {sub.child_list.map((child) =>

                                <AccordionDetails className="accordian-details">
                                    <p className="accordian__text s14">
                                        {child.child_heading}
                                    </p>

                                </AccordionDetails>
                                )}
                          </Accordion>
                  )}

                                  
                  </AccordionDetails>
                            
            </Accordion>
         )}


  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">

         <div className="faq-heading ">
             <p  className="fontb">Have questions?  &nbsp;
              <span className="fRiugX" onClick={togglePopup} >Read our FAQs </span>
            </p>
         </div>
         
          {isOpen && (
              <Popup
                content={ <div className="faq-wrapper"> {syllabusList} </div> }
                handleClose={togglePopup}
                />
          )}
   </div>
  )
}

export default Faq
