import React, {useState, useEffect,}from 'react'
import{ Link} from 'react-router-dom';
import './Assets/css/Banner.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import one from './Assets/img/a.svg'
import two from './Assets/img/b.svg'
import three from './Assets/img/c.svg'
import four from './Assets/img/d.svg'
import Vimeo from '@u-wave/react-vimeo';
import YouTube from '@u-wave/react-youtube';
import Popup from '../Popup.js';
// import Video1 from './video1.mp4'
import Player from '../Player.js'
import play from './Assets/img/play.svg'

const VideoModal = (props) => {
    return <div className='video-model'>
        <YouTube
            // title={props.src}
            video={props.url}
            allowFullScreen
            autoplay
            frameBorder="0"
            height="100%"
            width="100%"
            style={{borderRadius:'10px'}}
            // allow="accelerometer; autoplay;  gyroscope; picture-in-picture"
        />
    </div>
}

function Banner(props) {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
           if(!playing){
        setPlaying(true);
        }else{
        setPlaying(false);
        }
  }, []);
     const handleClick = () =>{
       
        if(!playing){
        setPlaying(true);
        }else{
        setPlaying(false);
        }
        
    }
    
    function handlePlayerPause() {
        setPlaying(true);
    }

    function handlePlayerPlay() {
        setPlaying(false);
    }

    const styleForPaper = {
    width: '40px',
    height: '40px',
    textAlign: 'center',
    display: 'inline-block',
    color: 'white',
    };
    
    const [list,setList] = useState([
        {
            id:0,
            name: 'CMAT/Engineering Entrance Test',
            subject1:'Physics',
            subject2:'Chemistry',
            subject3:'Mathematics',
            subject4:'English',
            langugage1:'English',
            language2:'NEPALESE',
            launch_date:'Started on Mar 24',
            lessons:'27 lessons',
            
        }
    ]);
    
    const [shown, setShown] = useState(false)
     
    const [showing, setShowing] = useState(true);
       
    const handleOpen =() => {
                                setShown(!shown);

                                setShowing(false);
                            }
     const handleChange = () => {
                                setShowing(false)
        }
   
    const [readMore,setReadMore]=useState(false);
    const linkName = readMore?'Read Less ':'Read More  '
    return (
        
    <div className="course-banner__wrapper">
                
            <div className="course-feature">
                    
                            <div className="course-feature__icon">
                                <div className="course-feature__icon__image"><img src={one} alt=""/></div>
                                <div className="course-feature__icon__text"><p className="s14 fontb">{props.subject1}</p></div> 
                            </div>
                            
                            <div className="course-feature__icon">
                                <div className="course-feature__icon__image"><img src={three} alt=""/></div>
                                <div className="course-feature__icon__text"><p className="s14 fontb">{props.subject3}</p></div> 
                            </div>

                             <div className="course-feature__icon">
                                <div className="course-feature__icon__image"><img src={two} alt=""/></div>
                                <div className="course-feature__icon__text"><p className="s14 fontb">{props.subject2}</p></div> 
                            </div>
                            
                            <div className="course-feature__icon">
                                <div className="course-feature__icon__image"><img src={four} alt=""/></div>
                                <div className="course-feature__icon__text"><p className="s14 fontb">{props.subject4}</p></div> 
                            </div>

                            {/* <Player /> */}
                            


                </div>  
             
            <div className="course-banner__wrapper-sub">      
               
            <div className="course-banner">
                            
                <div className="video-model__container">
                    {shown ? <VideoModal  url={props.url} /> : null}
                                    
                    {  showing ? 
                        <div  className="course-icon__text" >
                                    <img src={props.image} alt="" /> 
                                    
                                        <button className="popi" onClick={() => { handleOpen();  }}>
                                            <svg width="30px" height="30px" viewBox="0 0 80 80" class="">
                                                <path  d="M40 0c-7.911 0-15.645 2.346-22.223 6.741s-11.705 10.642-14.732 17.951c-3.028 7.309-3.82 15.352-2.276 23.111s5.353 14.887 10.947 20.481c5.594 5.594 12.721 9.404 20.481 10.947s15.802 0.751 23.111-2.276c7.309-3.028 13.556-8.155 17.951-14.733s6.741-14.311 6.741-22.223c-0.011-10.605-4.229-20.773-11.728-28.272s-17.667-11.717-28.272-11.728v0zM55.344 43.61l-18.174 10.461c-0.621 0.369-1.329 0.567-2.051 0.575-0.736-0-1.459-0.199-2.092-0.575-0.634-0.356-1.161-0.874-1.529-1.501s-0.562-1.341-0.564-2.068v-21.005c0.001-0.727 0.196-1.44 0.564-2.068s0.895-1.145 1.529-1.501c0.624-0.36 1.331-0.55 2.051-0.55s1.428 0.19 2.051 0.55l18.174 10.461c0.651 0.351 1.195 0.873 1.575 1.508s0.58 1.362 0.58 2.102-0.2 1.466-0.58 2.102c-0.379 0.635-0.923 1.157-1.575 1.508h0.041z" fill="#56555566" fill-rule="unset" clip-rule="unset" stroke-linecap="butt" stroke-linejoin="miter"></path>
                                            </svg>
                                        </button>
                        </div> : null }
                    </div>                   
                            
            </div>
            
                <div className="course-banner__content">
            
                <div className="course-banner__languages">
                    <p className="fontn">{props.language2}</p> &nbsp; 
                    <p className="fontn">{props.language1}</p> 

                </div>
                
                <div className="course-title">
                    <h2 className="s28 c333">{props.name}</h2>
                </div>
                
                <div className="course-excerpt">
                    <p className="s13 text">{props.excerpt}</p>
                    <p className="s13 text">{readMore && props.excerpt1}  </p>
                    <p style={{cursor:'pointer'}} className="s13 crrr " onClick={()=>{setReadMore(!readMore)}}> {linkName}</p>
                    
                </div>

                <div className="course-banner__button">
                    
                        <Link className="PrimaryBtn " to="/subscription"> 
                            Get Subscription
                        </Link> 
                </div>

                 <div className="course-banner__details ">
                    
                    <div className="session-start flex">
                        <div className="course-icon">
                            {/* <img src={three} alt=""/> */}
                            <svg width="24px" height="24px" viewBox="0 0 80 80">
                                <path d="M40 0c-7.911 0-15.645 2.346-22.223 6.741s-11.705 10.642-14.732 17.951c-3.028 7.309-3.82 15.352-2.276 23.111s5.353 14.887 10.947 20.481c5.594 5.594 12.721 9.404 20.481 10.947s15.802 0.751 23.111-2.276c7.309-3.028 13.556-8.155 17.951-14.733s6.741-14.311 6.741-22.223c-0.011-10.605-4.229-20.773-11.728-28.272s-17.667-11.717-28.272-11.728v0zM55.344 43.61l-18.174 10.461c-0.621 0.369-1.329 0.567-2.051 0.575-0.736-0-1.459-0.199-2.092-0.575-0.634-0.356-1.161-0.874-1.529-1.501s-0.562-1.341-0.564-2.068v-21.005c0.001-0.727 0.196-1.44 0.564-2.068s0.895-1.145 1.529-1.501c0.624-0.36 1.331-0.55 2.051-0.55s1.428 0.19 2.051 0.55l18.174 10.461c0.651 0.351 1.195 0.873 1.575 1.508s0.58 1.362 0.58 2.102-0.2 1.466-0.58 2.102c-0.379 0.635-0.923 1.157-1.575 1.508h0.041z" fill="#AAC3D9" fill-rule="unset" clip-rule="unset" stroke-linecap="butt" stroke-linejoin="miter"></path>
                            </svg>
                        </div>
                        
                        <div style={{}} className=""><p className="s14 fontb">{props.launch_date}</p> </div>
                    </div>
                    
                    <div className="course-lesson flex">
                        <div className="course-icon">
                            {/* <img src={two} alt=""/> */}
                            <svg width="24px" height="24px" viewBox="0 0 80 80" >
                                <path d="M66.667 14.133h-5.567v-4.133c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v0 4.133h-32.5v-4.133c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v0 4.133h-5.267c-1.385 0.019-2.5 1.146-2.5 2.533 0 0 0 0 0 0v0 11.8h58.333v-11.8c0-0 0-0 0-0 0-1.387-1.115-2.514-2.498-2.533h-0.002z M10.833 33.333v36.667c0.019 1.373 1.127 2.481 2.498 2.5h53.335c1.373-0.019 2.481-1.127 2.5-2.498v-36.668zM27.267 46.667h-3.333c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5v0h3.333c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5v0zM41.667 46.667h-3.333c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5v0h3.333c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5v0zM56.667 46.667h-3.333c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5v0h3.333c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5v0z" fill="#AAC3D9" fill-rule="unset" clip-rule="unset" stroke-linecap="butt" stroke-linejoin="miter"></path>
                            </svg>
                            </div>
                        
                        <div className="">
                            <p style={{}} className="s14 fontb">{props.lessons}</p>
                        </div>
                    </div>

                    


            </div>


    </div>
            </div>
</div>
    )
}

export default Banner
