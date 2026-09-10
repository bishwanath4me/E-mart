import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './State/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();


/* cd E:\Web Development\React project\Code-with-zosh\Ecomerce
taskkill /F /IM node.exe /T
netstat -ano | findstr :5451
npm run dev */

/* 
taskkill /F /IM node.exe /T removes every old Node/Express process tree.
netstat -ano | findstr :5451 confirms whether port 5451 is still occupied.
npm run dev runs the corrected script in package.json, which is already set to:

*/