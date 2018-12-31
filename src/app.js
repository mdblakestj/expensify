import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
//import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import './firebase/firebase'

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: -3000}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 50, createdAt: 300}))
store.dispatch(addExpense({description: 'Rent', amount: 50, createdAt: 1000}))



const state = store.getState();



const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
