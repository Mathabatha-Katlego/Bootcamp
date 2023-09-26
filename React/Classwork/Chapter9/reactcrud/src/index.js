import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyAOktu8MivUBJOrE30odM9yqovnjJHN5Yk",
  authDomain: "fir-192c2.firebaseapp.com",
  projectId: "fir-192c2",
  storageBucket: "fir-192c2.appspot.com",
  messagingSenderId: "1086255257580",
  appId: "1:1086255257580:web:69f7a36cbb9491d4fe12c9",
  measurementId: "G-18J02YXWX0"
};

firebase.initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
