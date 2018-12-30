//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDetails = ({id, description, amount, createdAt}) => (


        <div>
          <Link to={`/edit/${id}`}>
            <h3> {description}</h3>
          </Link>
          <p> Amount: {amount}</p>
          <p>Created At: {createdAt}</p>
        </div>

    )





export default ExpenseDetails;
