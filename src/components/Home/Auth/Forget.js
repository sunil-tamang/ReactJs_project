import React, {useState, useEffect, useRef} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

function Forget() {
    return (
        <div className="form__wrapper">
    <div className="form-field__container">
        
        <Formik
        initialValues={{ 
            email: ''
        }}
        
        onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
       
        validationSchema={Yup.object().shape({
            email: Yup.string()
            .email()
            .required("Required"),
        
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
               
                <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Submit </button>

            </form>
            );
        }}
        
        </Formik>
                           
                    
            </div>
                    
        </div>
    )
}

export default Forget
