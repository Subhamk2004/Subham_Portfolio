import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // the above lines state that get the document by id of root preset in html
  //folder and then execute the App.js file, as the <App/> is written
  // in above lines
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//
// to start the web app use code  = npm start;

// If we create any app or website with create-react-app then whatever the
 //  content is in App.js that will execute as a website
 
