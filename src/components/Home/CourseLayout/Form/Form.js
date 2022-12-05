import React ,{useRef}from 'react';
import './Form.css';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import one from './contact.png'
function Form() {
    return (
        <div className="contact-form__container">
             
               <div className="contact-form__heading"> 
                   <h1 className="s50 fontb">Get in touch with us</h1>
                   {/* <h1 className="s50 fontb">I'm Intersted In This Program</h1> */}
                   <p className="">Over 2,300 students have completed this course and started working at their dream job, whats stopping you?</p>
               </div> 
               

                <form className="contact-form--wrapper" action="">
                                     
                    <div className="contact-form--field">
                    <BlurOnIcon className="form-field__icons" style={{width: "20px", height: "20px"}} />
                         <input type="text" placeholder="Name"/> 
                    </div>  
                       
                  
                    <div className="contact-form--field">
                         <MailIcon className="form-field__icons" style={{width: "20px", height: "20px"}} />
                         <input type="text" placeholder="Email"/> 
                    </div>

                    <div className="contact-form--field">
                         <CallIcon className="form-field__icons" style={{width: "20px", height: "20px"}} />
                         <input type="text" placeholder="Phone Number "/>
                    </div>
              
               </form>
                 
                <div>
                        <p className="s13"> By clicking Start Application, you agree to our terms and conditions and our privacy policy. </p>
                        <button className="SecondaryBtn" type='submit'>Start Application</button>
                </div>

                   
           
        </div>
    )
}

export default Form
