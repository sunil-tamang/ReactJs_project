import React,{useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import './Assets/css/Banner.css';
import "@lottiefiles/lottie-player";

import play from './Assets/images/play4.svg';

// import booner from './support-team.svg';

import Popup from '../Hooks/Popup'
import YouTube from '@u-wave/react-youtube';

export default function Banner() {

     const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className="banner">
            
                <div className="banner-description">

                    <div className="banner-heading">
                        <h1 className="" >
                             Make online learning fun and refreshing!
                            </h1>
                    </div>

                    <div className="banner-subtitle ">
                         <p className=" fontb"> 
                          Whatever you want to do, this is the place to start learning how to do it
                          Facere corporis voluptatum . Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, fugit.
                           
                        </p>
                    </div>
                    <div className="banner-btn">

                          <span className="" onClick={togglePopup} > 
                                    <img src={play} alt="" /> <p className="s12 fontb">Watch intro video</p> 
                            </span>
                            {isOpen && (
                                <Popup
                                    content={ <div className="banner-video__container">
                                        <YouTube
                                            // title={props.src}
                                            video="fcNSpduaAKA"
                                            allowFullScreen
                                            autoplay
                                            frameBorder="0"
                                            height="100%"
                                            width="100%"
                                            style={{borderRadius:'10px'}}
                                            // allow="accelerometer; autoplay;  gyroscope; picture-in-picture"
                                    />
                                        </div> }
                                    handleClose={togglePopup}
                                    />
                         )}
                    </div>
                       
                </div>

              <div className="banner-background">  
                    {/* <img className="banner-image" src={booner} alt=""/> */}
                    <lottie-player
                        autoplay
                        loop
                        mode="Bounce"
                        src="https://assets3.lottiefiles.com/private_files/lf30_P9kQz3.json"
                        // src="https://assets8.lottiefiles.com/packages/lf20_ncpnijkz.json"
                        // src="https://assets10.lottiefiles.com/packages/lf20_d5hiizpx.json"
                        style={{width: '100%', height:'100%'}}
                        // className="banner-image"
                        > 
                    </lottie-player>
              </div>
        </div>
    )
}
