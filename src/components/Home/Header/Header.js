// NavBar Component

import React,{ useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Trigger from './Navbar/Dropdown';
import Widenavbar from './Navbar/Widenavbar';
import './Header.css';


import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { CSSTransition } from 'react-transition-group';



function Header() {
 
  const [width, setWidth] =useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);


    return (
       <div>
                         
            {width < breakpoint ? <Trigger  />   :  <Widenavbar />}  
           
     
      </div>

    );
}

export default Header;
