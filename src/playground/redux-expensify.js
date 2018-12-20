import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = (
  {description = '',
   note = '',
    amount = 0,
     createdAt = 0} = {}
   ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
//REMOVE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
})
//EDIT
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
}
)
//SET_TEXT_FILTER
const setTextFilter = (text= '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',

})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {return id != action.id})
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })


    default:
      return state;

  }
}
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state=filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state, text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
        }
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 1200}))
const demoState = {
  expenses: [{
    id: 'fsdllj',
    description: 'January Rent',
    note: "dadadada",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch(addExpense({description: 'beer', amount: 120}))
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseOne.expense.id, {amount: 50000}))

store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
