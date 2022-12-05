import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route,HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './store/Reducers'

import reportWebVitals from './reportWebVitals';

import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/index.css';
// import App from './App';


import Routes from './routes';


import { MuiThemeProvider, createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    
    MuiTabpanel:{
      root:{
          width: '100%',
      }
    },
    MuiLinearProgress: {
        root: {
            width:'100%',
            height: 10,
            borderRadius: 5
          },
          colorPrimary: {
            backgroundColor: '#1a90ff'
          },
          bar: {
            borderRadius: 5,
            backgroundColor: "#1a90ff"
          }
      },
     MuiSvgIcon:{
          root:{
            fontSize: "15px", 
            // color: '#CCCDCD'
            
          }
        },
      MuiTabs:{
        root:{
            width:'300px',
            height: '235px'
        },
        vertical:{
          width:'300px',
          padding:'1em',
          background:'#dfdadac4',
          borderRadius: '8px'

        },
    },
    MuiTab:{
      root:{
        width:'100vh',
        minHeight: '',
        padding:'1em',
        // background:'blue',

      },
      wrapper:{
        // width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: '',
        // backgroundColor: 'blue',
        padding:'8px 15px',
        marginTop: '0',
        fontSize:'14px',

      },
     
    },
     MuiList: {
              padding:{
                paddingTop: '0',
                paddingBottom: '0',
                backgroundColor: '#dfdadac4'
              }
         },

    MuiButton:{
      root:{
          
      }
    },
    radio: {
    '&$checked': {
      color: '#4B8DF8'
    }
  },
  checked: {},
   
  }
});


const createStoreWithMiddlware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
   
   <Provider store={createStoreWithMiddlware(reducers)}>
            <MuiThemeProvider theme={theme}>
                <React.StrictMode>
                  <HashRouter basename={process.env.PUBLIC_URL}>
                       <Routes/>
                      </HashRouter>
                </React.StrictMode>,
            </MuiThemeProvider>
  </Provider>
  ,document.getElementById('root'));

reportWebVitals();
