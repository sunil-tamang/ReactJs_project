import React,{useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import Pallete from './Pallete'
import Overview from './Overview'
import Tutor from './Tutor'

import "./Dashboard.css"
import '../Sidebar.css'
import DashboardNav from '../DashboardNav'

function Dashboard() {
    
    
    return (
        
        <div className="dashboard__container ">
                
                     <DashboardNav />
                     {/* <Pallete /> */}
                     <Overview />
                     {/* <Tutor /> */}
                
        </div>
    )
}

export default Dashboard
 