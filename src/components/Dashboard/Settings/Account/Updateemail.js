import React, {useState, useEffect,}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";


function Updateemail() {
    return (
              <div>
              

	<Formik
        initialValues={{ 
			email: ''
        }}
        
        onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
       
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

				<label htmlFor="email">email</label>
                <input id="email" placeholder="" type="text" autocomplete="nope" value={values.name} onChange={handleChange} onBlur={handleBlur}
                className={
                    errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
                />
                {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
                )}

             <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Update Email </button>
                
			
            </form>
            );
        }}
        
        </Formik>

    </div>
    )
}

export default Updateemail
