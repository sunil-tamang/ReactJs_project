import React, {Component} from 'react';
import {BrowserRouter, Switch, Route,HashRouter} from 'react-router-dom';


import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/App.css';

import Routes from './routes';


class App extends Component {

    // constructor(props) {   super(props); }
    

    render() {

        return (
            <>
                     <HashRouter basename={process.env.PUBLIC_URL}>
                         <Routes/>
                      </HashRouter>
          </>
        )
    }
}



export default App;
