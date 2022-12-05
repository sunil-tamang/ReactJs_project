import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';

import { render } from "react-dom";
import axios from 'axios';
import * as Yup from "yup";

import Select from 'react-select'
import CustomSelect from './CustomSelect'
import { Field, Form, Formik, FormikProps } from 'formik';

function Bio() {

    const MyInput = ({ field, form, ...props }) => {
   return <input {...field} {...props} />;
 };
 

    return (

    <>
     <Formik
       initialValues={{ Phone: '', Sex: 'Male',  Name: '' }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(props) => (
         <Form>
           
            <label htmlFor="Name">Full Name</label>
             <Field name="Name">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="text" placeholder="" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
          
        <label htmlFor="Phone">Phone Number</label>
           <Field name="Phone">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="text" placeholder="" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>

        <label htmlFor="Sex">Sex</label>
           <Field as="select" name="Sex">
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Other">Other</option>
           </Field>
 
          
          
           <button className="PrimaryBtn" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </>

    )
}

export default Bio
