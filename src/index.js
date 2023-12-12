import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { GA_TRACKING_ID } from './config'; // Ajusta la ruta según tu estructura de archivos
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';


ReactGA.initialize(GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

