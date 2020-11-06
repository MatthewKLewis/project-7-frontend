import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

//Components
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
