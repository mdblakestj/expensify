import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
// import IndecisionApp from './components/IndecisionApp.js;
//import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
      This is from my dashboard component
  </div>
)
const AddExpensePage = () => (
  <div>
      We are at Add
  </div>
)
const EditExpensePage = () => (
  <div>
      We are at Edit
  </div>
)
const HelpPage = () => (
  <div>
      We are at help
  </div>
)
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
