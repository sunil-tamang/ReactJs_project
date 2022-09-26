import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../components/Home/Index'
import Header from '../components/Home/Header/Header'
import Footer from '../components/Home/Footer/Footer'
import Login from '../components/Home/Auth/Login'
import Signup from '../components/Home/Auth/Signup'
import Forget from '../components/Home/Auth/Forget'


import About from '../components/Home/Pages/About/About'
import Blog from '../components/Home/Pages/Blog/Blog'
import Career from '../components/Home/Pages/Career/Career'
import Privacy from '../components/Home/Pages/Privacy/Privacy'
import Terms from '../components/Home/Pages/Terms/Terms'

import Engineering from '../components/Home/CourseLayout/Engineering'
import Medical from '../components/Home/CourseLayout/Medical'
import Subscription from '../components/Home/CourseLayout/subscription/Subscription'


function HomeLayout(props) {
     const { match } = props
    return (
        <div>
            <Header />
                <Switch>

                  <Route  exact path={`${match.path}`}  render={(props) => <Home {...props} /> } />
                  <Route  path={`${match.path}engineering`} component={Engineering} />
                  <Route  path={`${match.path}medical`} component={Medical} />
                  <Route  path={`${match.path}login`} component={Login} />
                  <Route  path={`${match.path}signup`} component={Signup} />
                  <Route  path={`${match.path}forget`} component={Forget} />
                  <Route  path={`${match.path}about`} component={About} />
                  <Route  path={`${match.path}career`} component={Career} />
                  <Route  path={`${match.path}blog`} component={Blog} />
                  <Route  path={`${match.path}privacy`} component={Privacy} />
                  <Route  path={`${match.path}terms`} component={Terms} />
                 
                 
                  {/* <Route exact path="/art" component={Tutor} /> */}
                  {/* <Route path="/person/:personId" component={TutoInfo} /> */}
                 
                 
                  {/* <Route exact path="/about" component={About} />  
                  <Route exact path="/career" component={Career} />   
                  <Route exact path="/blog" component={Blog} />  
                  <Route exact path="/privacy" component={Privacy} />  
                  <Route exact path="/terms" component={Terms} />  
                  <Route exact path='/engineering' component={Engineering} />
                  <Route exact path='/medical' component={Medical} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/forget' component={Forget} />
                  <Route exact path='/' component={Home} />
                  */}
                   {/* <Route path='/404' component={NotFound} />  
                   <Redirect from='*' to='/404' /> */}

                  {/* <Route  path={`${match.path}subscription`} component={Subscription} /> */}
                    
                
                </Switch>
            <Footer />


        </div>
    )                       
}
 HomeLayout.propTypes = {
     match: PropTypes.any.isRequired
 }
export default HomeLayout
