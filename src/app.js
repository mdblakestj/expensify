import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
// import IndecisionApp from './components/IndecisionApp.js;
//import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';







ReactDOM.render(<AppRouter />, document.getElementById('app'))
