import React from 'react'
import {connect} from 'react-redux'
import ExpenseDetails from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h1> ExpenseList </h1>
    {props.expenses.map((expense) => {
      return (
        
        <ExpenseDetails key={expense.id} {...expense} />

      )
    })}
  </div>
)


const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}


const ConnectedExpenseList = connect(mapStateToProps
)(ExpenseList)

export default ConnectedExpenseList;
