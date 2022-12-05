import React from 'react'
import click from './Outsideclick'
import './Popup.css'

function Popup(props) {
    
    return (
        <div className="popup-box">
            
            <click />
            
            <div className="box">
             
                <div className="close-icon" onClick={props.handleClose}>
                    <svg width="24px" height="24px" viewBox="0 0 80 80" class="">
                        <path d="M43.533 40l21.567-21.567c0.416-0.445 0.671-1.045 0.671-1.704 0-1.381-1.119-2.5-2.5-2.5-0.659 0-1.259 0.255-1.706 0.672l0.001-0.001-21.567 21.567-21.567-21.567c-0.445-0.416-1.045-0.671-1.704-0.671-1.381 0-2.5 1.119-2.5 2.5 0 0.659 0.255 1.259 0.672 1.706l-0.001-0.001 21.567 21.567-21.567 21.567c-0.452 0.452-0.731 1.077-0.731 1.767s0.279 1.314 0.731 1.767v0c0.452 0.452 1.077 0.731 1.767 0.731s1.314-0.279 1.767-0.731v0l21.567-21.567 21.567 21.567c0.452 0.452 1.077 0.731 1.767 0.731s1.314-0.279 1.767-0.731v0c0.452-0.452 0.731-1.077 0.731-1.767s-0.279-1.314-0.731-1.767v0z" fill="#3C4852" fill-rule="unset" clip-rule="unset" stroke-linecap="butt" stroke-linejoin="miter">
                        </path>
                    </svg>
                </div>
                
                    {props.content}
                    
            </div>
        </div>
    )
}

export default Popup
