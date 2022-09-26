import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import './Auth.css';
import glogo from '../Header/icons/glogo.svg';
import github from '../Header/icons/github.svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm =() =>{
    return(
             <Formik
        initialValues={{ 
            email: '',
            password: ''
        }}
        
        onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
       
        validationSchema={Yup.object().shape({
            email: Yup.string()
            // .email()
            // .required("Required"),

            // password: Yup.string('Enter your password')
            // .min(8, 'Password should be of minimum 8 characters length')
            // .required('Password is required'),
        })}
        >
        {props => {
            const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
            } = props;

            return (
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <h1 className="s28">Login</h1>
                        <p>or <Link to="/signup" className="border">create your account</Link> </p>
                    </div>
                  
                   <div>
                        <input id="email" placeholder="Email" type="text" autocomplete="nope" value={values.email} onChange={handleChange} onBlur={handleBlur}
                        // className={
                        //     errors.email && touched.email
                        //     ? "text-input error"
                        //     : "text-input"
                        // }
                        />

                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}

                        <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                  </div>


                   
                
                    <div className="login-btn-container">
                      
                        <div>
                            <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Submit </button>
                        </div> 
                   
                        <div className="forget-password">
                             <Link to="/forget" className="border">Forget password ?</Link>
                         </div> 
                    </div> 
                        
                    

                    <div className="social-btn__container">
                               
                                <h1 className="s14 "> Or, connect with </h1> 
                                
                                <button className="form__socialButton">
                                    <span className="form__socialButton--icon"><img className="form__social-login__icon" src={glogo} alt=""/> </span>
                                    <p className="s14 fontb">Continue with Google</p>
                                </button>


                                <button className="form__socialButton">
                                    <span className="form__socialButton--icon"><img className="form__social-login__icon" src={github} alt=""/> </span>
                                    <p className="s14 fontb">Continue with Github</p>
                                </button>
                    </div> 


                </form>
            );
        }}
        
        </Formik>
    )
}


function Login() {
  
    return (

        <div className="form__wrapper">
            
                <div className="form-field__container">
                            <LoginForm />
                </div>
                            
        </div>
    );
}

export default Login;
