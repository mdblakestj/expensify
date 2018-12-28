//Export a stateless functional component
//description, amount, createdAt

import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

const ExpenseDetails = ({dispatch, id, description, amount, createdAt}) => (


        <div>
          <h3> {description}</h3>
          <p> Amount: {amount}</p>
          <p>Created At: {createdAt}</p>
          <button onClick={() => {dispatch(removeExpense({id}))}}>Remove</button>
        </div>

    )





export default connect()(ExpenseDetails);
