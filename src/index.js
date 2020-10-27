import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import bg from './img/bg_sky.mp4';


ReactDOM.render(
  <React.StrictMode>
    <video className='videoTag' autoPlay loop muted>
        <source src={bg} type='video/mp4' />
    </video>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


