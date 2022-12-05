import React from 'react'
import './Assets/css/Download.css'
import image from './Assets/img/cover.png'
import gpay from './Assets/img/gpay.png';
import apple from './Assets/img/apple.png';

function Download() {
    return (
        <div className="download">
           
            <div className="download-text">
               
                <h1 className="s40">Learn anytime <br /> anywhere on our app </h1>
                <br />
                <p className="s13 c777 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                </p>
                
                <div className="app-icon__wrapper">
                    <img src={gpay} alt=""/> &nbsp;
                    <img src={apple} alt=""/>
                </div>
                
            </div>

             <div className="download-image">
                <img src={image} alt=""/>
            </div>

        </div>
    )
}

export default Download
