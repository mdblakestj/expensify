import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


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
      We are at Help Page
  </div>
)
const Header = () => (
  <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home  </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create  </NavLink>
      <NavLink to="/Edit" activeClassName="is-active">Edit  </NavLink>
      <NavLink to="/help" activeClassName="is-active">Help  </NavLink>
  </header>
)

const NotFound = () => (
  <div>
      404! <NavLink to="/">Go Home</NavLink>
  </div>
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
