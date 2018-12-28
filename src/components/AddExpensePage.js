import React from 'react';
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'
import {connect} from 'react-redux'

const AddExpensePage = (props) => (
  <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense))
          
        }} />

  </div>
)

// export default AddExpensePage;




export default connect()(AddExpensePage);
