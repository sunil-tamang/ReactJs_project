import React,{useState, useEffect,} from 'react'
import {BrowserRouter as Router, Switch, Route, Link , NavLink, HashRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import './assets/css/Style.css'

import Overview from '../components/Dashboard/Overview/Index'
import Discover from '../components/Dashboard/Discover/Index'
import MyCourses from '../components/Dashboard/Courses/Index'
import Mocktest from '../components/Dashboard/Mocktest/Index'
import Settings from '../components/Dashboard/Settings/Index'

import Course from '../components/Dashboard/Courses/Course' 

import Tutor from '../components/Dashboard/Overview/Tutor' 
import Tutoinfo from '../components/Dashboard/Overview/TutoInfo' 


import DashboardNav from '../components/Dashboard/DashboardNav'

import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteIcon from '@material-ui/icons/Note';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';


import  Logo from './assets/images/logo.svg';
import Support from './assets/images/support.svg'

const LeftNavLayout = (props) => {   
  
    const { match } = props
   
    const [nav, setNav] = useState([
        // {label: "Home", slug: "/", icon:<Logo/> },
        {label: "Overview", slug: "/dashboard/overview", icon:<DashboardIcon/> },
        {label: "My Course", slug: "/dashboard/courses", icon: <NoteIcon/>},
        {label: "Mock Test", slug: "/dashboard/mock-test",icon: <AssignmentIcon/>} , 
        {label: "Discover", slug: "/dashboard/discover", icon: <SearchIcon />},
        {label: "Settings", slug: "/dashboard/settings",icon: <SettingsIcon/>}, 

    ]);
   
    var navigation = [];
    for (let i = 0; i < nav.length; i++){
        navigation.push(
          
          <li className=" ">
                 <NavLink activeClassName="selected" className=" sidebar__link flex aic" to={nav[i].slug}>
                        <div className="flex aic padd">  {nav[i].icon} </div>
                        <h4 className="flex aic s12  hood fontb">{nav[i].label}</h4>
                 </NavLink>
          </li>
        )
        
    }
    
    const StartChat = () => {

        return (
            <>

            </>
        )
    }


    return (
        <div className="sidebar__container">
            
          
        <div className="dashboard-header">
        
                <DashboardNav />

        </div>
        
        
        <div className="side" >

                <div className="dashboard-logo flex aic ">
                    <Link to="/" className=""> 
                        <img src={Logo} alt=""/> 
                    </Link>
                </div>

                 
             
                <div className="dashboard-navigation-wrapper">
                    {navigation}
                </div>
    
                 
                 <div className="user-support flex cdir jic aic">
                        <div className="user-support__svg">
                             <img src={Support} alt="" />
                        </div>
                        
                        <div style={{textAlign: 'center'}}>
                            <h1 className="s13 fontb c333">Support 24/7</h1>
                            <p className="s10 c777 fontn">Contact us anytime</p> 
                        </div> 
                        
                        <div>
                            <p onClick={() => { StartChat(); }} >
                                Start chat 
                            </p>
                        </div> 
                             
                 </div>

        </div>


            <div className="dashboardy">
            <HashRouter>
                <Switch>
                        {/* <Route exact path={`${match.path}/overview`} render={(props) => <Dashboard {...props} /> }/> */}
                        {/* <Route path={`${match.path}/`} component={Home} /> */}
                        <Route  path={`${match.path}overview`} component={Overview} />
                        <Route  path={`${match.path}person/:personId`} component={Tutoinfo} />


                        <Route  path={`${match.path}discover`} component={Discover} />
                        <Route  path={`${match.path}courses`} component={MyCourses} />
                        <Route  path={`${match.path}mock-test`} component={Mocktest} />
                        <Route  path={`${match.path}settings`} component={Settings} />
                        
                        <Route  path={`${match.path}course`} component={Course} />
                        
                </Switch>
                </HashRouter>
            </div>


            <div className="mobile-dash" >
                    {navigation}
            </div>

        </div>
    )
}


 LeftNavLayout.propTypes = {
     match: PropTypes.any.isRequired
 }
export default LeftNavLayout
