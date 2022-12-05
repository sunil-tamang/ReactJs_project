import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

function Changepassword() {

const Schema = Yup.object().shape({
  password: Yup.string().required("This field is required"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

    return (
        <div>
            <Formik
        initialValues={{ 
			password:'',
            changepassword: ''
        }}
        
        validationSchema={Schema}

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

				<label htmlFor="password">password</label>
                <input
                type="password"
                name="password"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                />

                {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                )}

                 <label for="passowrd">Confirm Password</label>
                <input
                type="password"
                name="changepassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.changepassword}
                />
                <span class="error" style={{ color: "red" }}>
                {errors.changepassword}
                </span>
                
               <button type="submit" className="PrimaryBtn" disabled={isSubmitting}> Update Password </button>


            </form>
            );
        }}
        
        </Formik> 
        </div>
    )
}

export default Changepassword
