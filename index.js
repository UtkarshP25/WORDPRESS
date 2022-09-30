import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aaditya7575:Aadi@7575@webproject.ekoubbk.mongodb.net/Data',{
      useUnifiedTopology : true,
      useNewUrlParser: true,

}).then(console.log('Connected to mongo db!'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
