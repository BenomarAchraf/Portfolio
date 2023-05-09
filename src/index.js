import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


  window.onscroll=()=>{

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100)
  }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

