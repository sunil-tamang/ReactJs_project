import React,{useState, useEffect,}from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <div className="flex aic">
         
          <div style={{width: '100%'}} mr={1}>
             <LinearProgress variant="determinate" {...props} />
          </div>
         
          <div>
              <p className="s15 fontb">{`${Math.round(props.value,)}%`} </p>
          </div>

    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};





function Progress(props) {
      
    const [progress, setProgress] = useState(0);

    useEffect(() => {
         const timer = setInterval(() => {
         setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);




    const [subject, setSubjects] = useState([
        {
        id:1,
        title: 'Physics',
        url:'',
        value: '80'
        },
        {
          id:2,
          title: 'Chemistry',
          url:'',
          value: '50'
        },
        {
          id:3,
          title: 'Chemistry',
          url:'',
          value: '80'
        },
        {
          id:2,
          title: 'Chemistry',
          url:'',
          value: '90'
        }
    ]);

    var subjectList = [];
    for(let i = 0; i < subject.length; i++){
        
        subjectList.push(

            <Link  className="progress-wrapper" to={"/dashboard/overview/" + subject[i].id}  key={"bar-" + i}>                           
               
                <div className="padd">
                    <p className="s18 fontb">{subject[i].title}</p>
                </div> 
              
               <div  className="padd">
                 <LinearProgressWithLabel value={progress} />
              </div>

            </Link>
        );
    }
    
    return (
        <div className="">
            
             <div className="progresso">
                 {subjectList}
            </div>
              
              {/* <div className={classes.root}>
                <LinearProgressWithLabel value={progress} />
            </div> */}

        </div>
    )
}

export default Progress
