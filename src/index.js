import React from 'react';
import { render } from 'react-dom';
// @App
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
