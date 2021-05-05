import React from 'react';
import { render } from 'react-dom';

import firebase from 'firebase/app'
import { ThemeProvider } from 'styled-components';
import * as theme from './components/config/theme';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC-K63PB3tYmjheqqXT66QLV_oWFtbcXo",
    authDomain: "awesome-project-11266.firebaseapp.com",
    projectId: "awesome-project-11266",
    storageBucket: "awesome-project-11266.appspot.com",
    messagingSenderId: "39786979202",
    appId: "1:39786979202:web:02764efc653c5df01b799b",
    measurementId: "G-EZ4683V9GH"
  };

  //debugger;
firebase.initializeApp(firebaseConfig);

render(
  
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
