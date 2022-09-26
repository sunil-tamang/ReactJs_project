import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/App.css';

import Routes from './routes';


class App extends Component {

    // constructor(props) {   super(props); }
    

    render() {

        return (
            <>
                <BrowserRouter >
                     <HashRouter>
                         <Routes/>
                      </HashRouter>
                </BrowserRouter>
          </>
        )
    }
}



export default App;
