import React from 'react';
import {BrowserRouter, Switch, Route,HashRouter} from 'react-router-dom';



import HomeLayout from './layouts/HomeLayout'
import LeftNavLayout from './layouts/LeftNavLayout'
import Subscription from './components/Home/CourseLayout/subscription/Subscription';

import Home from './components/Home/home'
import Artist from './components/Home/artist';
// import Header from './atoms/Header/Header'
// import Footer from './atoms/Footer/Footer'
// import Home from './atoms/Home/Home'
// import Blog from './atoms/Pages/Blog/Blog'
// import About from './atoms/Pages/About/About'
// import Career from './atoms/Pages/Career/Career'
// import Privacy from './atoms/Pages/Privacy/Privacy'
// import Terms from './atoms/Pages/Terms/Terms'
// import Login from './atoms/Auth/Login'
// import Signup from './atoms/Auth/Signup'
// import Forget from './atoms/Auth/Forget'
// import Engineering from './atoms/CourseLayout/Engineering'
// import Medical from './atoms/CourseLayout/Medical'


const routes = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                        {/* <Route exact path='/' component={Home} />  */}
                        
                        {/* <Route path="/artist/:id" exact component={Artist}/> */}

                        <Route  path='/subscription' component={Subscription} /> 
                        
                        <Route  path='/dashboard/' render={(props) => <LeftNavLayout {...props} /> } /> 
                        
                        <Route  path='' render={(props) => <HomeLayout {...props} /> } />
                        
                        {/* <Route path="/about" component={About} />  
                        <Route path="/career" component={Career} />   
                        <Route path="/blog" component={Blog} />  
                        <Route path="/privacy" component={Privacy} />  
                        <Route path="/terms" component={Terms} />  
                        <Route path='/engineering' component={Engineering} />
                        <Route path='/forget' component={Forget} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/' component={Home} /> */}
                </Switch>
                </HashRouter>
    );
};

export default routes;