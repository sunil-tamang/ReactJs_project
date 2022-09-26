import React, {useState, useEffect,}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";


function Changeusername() {
    return (
        <div>
    <Formik
        initialValues={{ 
			username: '',
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
              
				<label htmlFor="username">username</label>
                <input id="username" placeholder="" type="text" autocomplete="nope" value={values.name} onChange={handleChange} onBlur={handleBlur}
                className={
                    errors.username && touched.username
                    ? "text-input error"
                    : "text-input"
                }
                />
				{errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
                )}


            <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Change Username </button>

            </form>
            );
        }}
        
        </Formik> 
        </div>
    )
}

export default Changeusername
