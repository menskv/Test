import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyCeOfaGwvZLQ4Z3Ia1eObjYs3VTURF4AP8",
    authDomain: "test-de8d5.firebaseapp.com",
    databaseURL: "https://test-de8d5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-de8d5",
    storageBucket: "test-de8d5.appspot.com",
    messagingSenderId: "195705409802",
    appId: "1:195705409802:web:a5de394d7c0ba954092af3",
    measurementId: "G-9H8YBKPNNR"
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
