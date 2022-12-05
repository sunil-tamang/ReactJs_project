
import React, { useState, useEffect, useRef, Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Widenav.css';

// import  BellIcon from './icons/download1.svg';

import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { CSSTransition } from 'react-transition-group';

import glogo from './glogo.svg';
import github from './github.svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import Popup from '../../Hooks/Popup'
import { Formik } from "formik";
import * as Yup from "yup";

function Widenavbar() {
    return (
        <Navbar>
          <DropdownMenu>
            
          </DropdownMenu>
        </Navbar>
    )    
}


const LoginForm =() =>{
    
  const [isOn, setIsOn] = useState(false);
  const togglePopup = () => {
    setIsOn(!isOn);
  };
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
                        <p>or <Link  onClick={togglePopup} className="border">create your account</Link> </p>

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

function Navbar(props) {

  const [open, setOpen] = useState(false);
   
      const node = useRef();
      const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setOpen(false);
      };

      const handleChange = selectedValue => {
        // onChange(selectedValue);
        setOpen(false);
      };

      useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, [node]);

  const [isOn, setIsOn] = useState(false);
  const togglePopup = () => {
    setIsOn(!isOn);
  };
  return (
   
    <nav className="wide-navbar" >
     
      <ul className="wide-navbar-nav" >

             <li className="wide-navbar-item1">

               <Link className="wide-navbar-links" to="/">
                  
                     <img src={glogo} className="logo "  alt=""/>
                   
                </Link>

             </li>

            <li className="wide-navbar-item2" ref={node}
                  onMouseEnter={() => setOpen(!open)}
                  onMouseLeave={() => setOpen(false)} >
                  <Link className="wide-navbar-links button"
                  onClick={() => setOpen(!open)}>
                    Course <ArrowDropDownIcon />
                  </Link>
                    {open && props.children}
            </li>

            <li className="wide-navbar-item3">

            <Link className="wide-navbar-links PrimaryBtn1 " to="/login">
                Login
            </Link>  
           
           
           
        {/* <Link className="wide-navbar-links button " onClick={togglePopup}>
                Login
            </Link>

            {isOn && (
                  <Popup
                    content={
                          <div className="form__wrapper">
            
                          <div className="form-field__container">
                                      <LoginForm />
                          </div>
                                      
                  </div>
                      }
                    handleClose={togglePopup}
                    />
                  )} */}
          </li>
     
    </ul>

    </nav>
  );
}




function DropdownMenu() {
 
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
          // setMenuHeight(dropdownRef.firstChild.offsetHeight)
          //  setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {

      return (
        <Link className="wide-menu-item  " onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          {/* <span className="icon-right">{props.rightIcon}</span> */}
        </Link>
      );
  }

  return (
    <div className="wide-menu-dropdown" ref={dropdownRef}>

        <CSSTransition in={activeMenu === 'main'} 
            timeout={500} 
            classNames="menu-primary" 
            unmountOnExit 
            onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings"> Entrance Test Prep </DropdownItem>
                <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="animals">
                  Loksewa Ayog Prep
                </DropdownItem>

           </div>
        </CSSTransition>

        <CSSTransition in={activeMenu === 'settings'} 
            timeout={500} 
            classNames="menu-secondary" 
            unmountOnExit 
            onEnter={calcHeight}>
            <div className="wide-menu">
                <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}> <p><ArrowIcon /></p> </DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/engineering">Engineering Entrance Test </Link> </DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/medical">Medical Entrance Test</Link></DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/engineering">TET</Link></DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/engineering">NTA</Link></DropdownItem>
                <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/engineering">NTA</Link></DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition in={activeMenu === 'animals'} 
            timeout={500}
            classNames="menu-secondary" 
            unmountOnExit 
            onEnter={calcHeight}>
            <div className="wide-menu">
              <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}> <p> </p> </DropdownItem>
              <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/medical">NEET</Link></DropdownItem>
              <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/medical">JEE</Link></DropdownItem>
              <DropdownItem leftIcon={<CogIcon />}><Link className="wide-menu__link" to="/medical">CLAT</Link></DropdownItem>
              <DropdownItem leftIcon="🦔"><Link className="wide-menu__link" to="/medical">BPSC</Link></DropdownItem>
            </div>
        </CSSTransition>
   
    </div>
  );
}

export default Widenavbar
