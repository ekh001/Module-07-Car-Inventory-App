import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';


ReactDOM.render(
  <React.StrictMode>
    <Home title={'안녕 여러분'}/> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
