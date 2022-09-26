import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './Overview.css'

import Progress from './Progress'

import Chart from './Chart'
import Tutor from './Tutor';

// import Barchart from './Barchart'
import DashboardNav from '../DashboardNav'

// import '../Sidebar.css'



function Overview(props) {

return (
        <div className="overview">
          
          
                {/* <DashboardNav /> */}

                {/* <Progress /> */}
                
                <div className="chart-wrapper">

                     {/* <Chart /> */}
                    {/* <Barchart /> */}
                     <Tutor />
                </div>
        </div>
    )
}

export default Overview
