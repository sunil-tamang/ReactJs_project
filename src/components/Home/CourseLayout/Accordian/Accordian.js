import React, {useState, useEffect,} from 'react';
import './Assets/css/Accordian.css'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popup from '../Popup';
import teacher1  from './Assets/img/teacher-1.jpg';
import teacher2  from './Assets/img/teacher-2.jpg';
import teacher3 from './Assets/img/teacher-3.jpg';
import teacher4 from './Assets/img/teacher-4.jpg';
import teacher5 from './Assets/img/teacher-5.jpg';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
      MuiButtonBase:{
        root:{
          display: 'none',
        }
      }
  }
});

const Accordion = withStyles({
  root: {
     backgroundColor: '#F8F8F8',
    // border: '1px solid rgba(0, 0, 0, .125)',
    width: '100%',
    height: 'auto',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      // margin: 'auto',
    },'&$hover': {
    }
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // padding: '1em 2em',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    // border: '1px solid rgba(0, 0, 0, .125)',
    border: '1px solid #F9EBE9',
    borderRadius: '5px',
    marginTop:'.8em',
    minHeight: 56,
    '&$expanded': {
      // minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      // margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',
    padding:'1em 0 0 0em',
  },
}))(MuiAccordionDetails);



function Accordian() {

const [list, setList] = useState(
  [
    {
      id: 1,
      heading : 'Physics',  
      duration: '4 weeks',
      avatar : teacher1,
      teacher: 'Prof. Dr. Bhadra Prasad Pokharel',
      quantity: '20 videos',
          sub_list:[
                      {
                      id:1,
                      sub_heading: 'Mechanics',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'Unit and Dimension',
                                          child_src : 'fcNSpduaAKA'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Scalars & Vectors',
                                          child_src : 'fcNSpduaAKA'


                                        },
                                        {
                                          id:3,
                                          child_heading:'Kinematics',
                                          child_src : 'fcNSpduaAKA'

                                        }
                                    ]
                      },
                      {
                      id:2,
                      sub_heading: 'Sound Waves',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Sound Waves'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Velocity of Sound'
                                        }
                                    ]
                      },
                        {
                      id:3,
                      sub_heading: 'Heat & Thermodynamics',
                      sub_duration: '30 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Heat & Thermodynamics Intro'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Temperature & Quantity of heat'
                                        }
                                    ]
                      },
                      {
                      id:4,
                      sub_heading: 'Electricity & Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Electrostatics'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Current Electricity & DC Circuits'
                                        }
                                    ]
                      },
                       {
                      id:5,
                      sub_heading: 'Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Pure Magnetism'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Two Magnet of Magnetic Moment'
                                        }
                                    ]
                      }
                   ]
    },
    {
      id: 2,
      heading : 'Chemistry',  
      duration: '5 weeks',
      avatar: teacher2,
      teacher: 'Asst. Prof. Chhabi Lal Gnawali',
      quantity: '25 videos',
          sub_list:[
                      {
                      id:1,
                      sub_heading: 'Mechanics',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'Unit and Dimension',
                                          child_src : 'https://vimeo.com/192376447'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Scalars & Vectors',
                                          child_src : 'https://vimeo.com/194555118'

                                        },
                                        {
                                          id:3,
                                          child_heading:'Kinematics',
                                          child_src : 'https://vimeo.com/191430328'

                                        }
                                    ]
                      },
                      {
                      id:2,
                      sub_heading: 'Sound Waves',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Sound Waves'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Velocity of Sound'
                                        }
                                    ]
                      },
                        {
                      id:3,
                      sub_heading: 'Heat & Thermodynamics',
                      sub_duration: '30 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Heat & Thermodynamics Intro'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Temperature & Quantity of heat'
                                        }
                                    ]
                      },
                      {
                      id:4,
                      sub_heading: 'Electricity & Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Electrostatics'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Current Electricity & DC Circuits'
                                        }
                                    ]
                      },
                       {
                      id:5,
                      sub_heading: 'Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Pure Magnetism'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Two Magnet of Magnetic Moment'
                                        }
                                    ]
                      }
                   ]
    },
    {
      id: 3,
      heading : 'Mathematics',  
      duration: '7 weeks',
      avatar: teacher3,
      teacher: 'Mr. Lila Bahadur Kunwar',
      quantity: '15 videos',
          sub_list:[
                      {
                      id:1,
                      sub_heading: 'Mechanics',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'Unit and Dimension',
                                          child_src : 'https://vimeo.com/192376447'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Scalars & Vectors',
                                          child_src : 'https://vimeo.com/194555118'

                                        },
                                        {
                                          id:3,
                                          child_heading:'Kinematics',
                                          child_src : 'https://vimeo.com/191430328'

                                        }
                                    ]
                      },
                      {
                      id:2,
                      sub_heading: 'Sound Waves',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Sound Waves'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Velocity of Sound'
                                        }
                                    ]
                      },
                        {
                      id:3,
                      sub_heading: 'Heat & Thermodynamics',
                      sub_duration: '30 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Heat & Thermodynamics Intro'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Temperature & Quantity of heat'
                                        }
                                    ]
                      },
                      {
                      id:4,
                      sub_heading: 'Electricity & Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Electrostatics'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Current Electricity & DC Circuits'
                                        }
                                    ]
                      },
                       {
                      id:5,
                      sub_heading: 'Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Pure Magnetism'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Two Magnet of Magnetic Moment'
                                        }
                                    ]
                      }
                   ]
    },
    {
      id: 4,
      heading : 'English',  
      duration: '3 weeks',
      avatar: teacher4,
      teacher: 'Prof. Dr. Binod Bhattarai',
      quantity: '8 videos',
          sub_list:[
                      {
                      id:1,
                      sub_heading: 'Mechanics',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [ 
                                        {
                                          id:1,
                                          child_heading:'Unit and Dimension',
                                          child_src : 'https://vimeo.com/192376447'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Scalars & Vectors',
                                          child_src : 'https://vimeo.com/194555118'

                                        },
                                        {
                                          id:3,
                                          child_heading:'Kinematics',
                                          child_src : 'https://vimeo.com/191430328'

                                        }
                                    ]
                      },
                      {
                      id:2,
                      sub_heading: 'Sound Waves',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Sound Waves'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Velocity of Sound'
                                        }
                                    ]
                      },
                        {
                      id:3,
                      sub_heading: 'Heat & Thermodynamics',
                      sub_duration: '30 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Heat & Thermodynamics Intro'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Temperature & Quantity of heat'
                                        }
                                    ]
                      },
                      {
                      id:4,
                      sub_heading: 'Electricity & Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Electrostatics'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Current Electricity & DC Circuits'
                                        }
                                    ]
                      },
                       {
                      id:5,
                      sub_heading: 'Magnetism',
                      sub_duration: '10 Lectures . 30min',
                      child_list : [
                                        {
                                          id:1,
                                          child_heading:'Pure Magnetism'
                                        },
                                        {
                                          id:2,
                                          child_heading:'Two Magnet of Magnetic Moment'
                                        }
                                    ]
                      }
                   ]
    }
  ]   
);

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
    var syllabusList =[];
      for(let i = 0; i < list.length; i++) {
            syllabusList.push(
          <Accordion className="accordian">
            
              <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                
                        <div className="accordian__details">

                              <div className="accordian__details__">

                                    <h4 className="fontb">{list[i].duration}</h4>

                                    <img src={list[i].avatar} alt=""/>

                                    <div className="accordian-title"> 
                                      <h4 className=" fontb">{list[i].heading}</h4>
                                      <p className="s10 ">{list[i].teacher}</p>
                                    </div>

                                </div>
                                
                                <div className="video-quantity">
                                    <h4 className="fontb">{list[i].quantity}</h4>
                                </div>   
                      </div>

              </AccordionSummary>
                
                    <AccordionDetails className="accord" >
                              {list[i].sub_list.map((sub) => 
                                <Accordion className="sub-accordian">
                                     
                                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                                          <div className="accordian__details1">
                                              <h5 className="">
                                                  {sub.sub_heading}
                                              </h5>
                                              <h5 className="">
                                                  {sub.sub_duration}
                                              </h5>
                                          </div>

                                      </AccordionSummary>

                                      {sub.child_list.map((child) =>

                                      <AccordionDetails>
                                          <p className="accordian__text s14">
                                              {<Popup src={child.child_src}/>}
                                               {child.child_heading}
                                          </p>

                                      </AccordionDetails>
                                      )}
                                </Accordion>
                        )}

                                        
                        </AccordionDetails>
                                  
              </Accordion>
         )}  

  return (
     <MuiThemeProvider theme={theme}>

    <div className="accordian__container">
         
         <div className="accordian__container__heading">
                    <h1 className="s50 fontb">Comprehensive syllabus</h1>
                    <p className="">Our courses provide complete coverage of the topics you need to be prepared for</p>
          </div> 

         <div className="accordian__">
            <>{syllabusList}</>
         </div>
    </div>
    </MuiThemeProvider>

    )
}

export default Accordian;
