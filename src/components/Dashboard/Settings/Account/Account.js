import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';


// import { MoreResources, DisplayFormikState } from "./helper";
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import Changeusername from './Changeusername'
import Updateemail from './Updateemail'
import Changepassword from './Changepassword'
import Deleteaccount from './Deleteaccount'

function Account() {

    return (
        <div>
            <Changeusername />

            <Changepassword />    

            <Updateemail />

            <Deleteaccount />
      </div>

    )
}

export default Account
