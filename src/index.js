import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';

var firebaseConfig = {
  apiKey: "AIzaSyAoilP_AnRKBaf363D7H2XrLa0wOCIV60U",
    authDomain: "hypernova-rent-a-car.firebaseapp.com",
    projectId: "hypernova-rent-a-car",
    storageBucket: "hypernova-rent-a-car.appspot.com",
    messagingSenderId: "599992758039",
    appId: "1:599992758039:web:9d082b100c06fb09769152"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
