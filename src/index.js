import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Computer from './computerDecision'
import Player from './playerDecision'
import RoundResult from './roundResult';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Player />
    <Computer/> */}
    <RoundResult />
  </React.StrictMode>,
  document.getElementById('root')
);

