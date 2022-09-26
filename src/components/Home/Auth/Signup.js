import React from 'react'
import './Auth.css';


import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import glogo from '../Header/icons/glogo.svg';
import github from '../Header/icons/github.svg';
import { Formik } from 'formik';
import * as Yup from 'yup'

const SignupForm = () => {
    return(
        <Formik
            initialValues={{ 
                name: '',
                email: '',
                password: ''
            }}
            
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert(JSON.stringify(values, null, 2));
            }}
          
            validationSchema={Yup.object().shape({
                // name: Yup.string()
                // .required("Required"),

                // email: Yup.string()
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
               
                <div className="contact-form__heading">
                      <h1 className="s28">Sign Up</h1>
                      <p>or <Link to="/login" className="border">login to your account</Link> </p>
                </div>
               
                <div>
                    <input id="name" placeholder="Enter your name" type="text" autocomplete="nope" value={values.name} onChange={handleChange} onBlur={handleBlur}
                    className={
                        errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                    />

                    {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                    )}

                    <input id="email" placeholder="Enter your email" type="text" autocomplete="nope" value={values.email} onChange={handleChange} onBlur={handleBlur}
                    className={
                        errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                    />

                    {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                    )}

                    <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}   
                    />

                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}

             </div>
               
                <div>
                    <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Submit </button>
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

function Signup() {
   
  return (
      
      <div className="form__wrapper">
                 
            <div className="form-field__container">

                <SignupForm />

      {/* Social Login Button */}
             
              {/* <div className="social-btn__container">
                
                  <h1> Or, connect with </h1> 
                
                  <button className="form__socialButton">
                      <span className="form__socialButton--icon"><img className="form__social-login__icon" src={glogo} alt=""/> &nbsp; &nbsp; <h1>Google</h1></span>
                    </button>
                  
                  <button className="form__socialButton">
                      <span className="form__socialButton--icon"><img className="form__social-login__icon" src={github} alt=""/> &nbsp; &nbsp; <h1>Github</h1></span>
                    </button>
              </div> */}
            
            </div>
            
    </div>
  );
}

export default Signup;
