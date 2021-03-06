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
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})

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
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        }
    default:
      return state;
  }
}

// timestamps
//JAnuary 1st 1970 (unix epoch) = 0
//33400, 10, -203

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
};
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

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
  const state = store.getState();
  const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: -1200, createdAt: -3000}))
const expenseTwo = store.dispatch(addExpense({description: 'beer', amount: 120, createdAt: 1000 }))
const expenseThree = store.dispatch(addExpense({description: 'rent', amount: 12, createdAt: 3}))
const expenseFour = store.dispatch(addExpense({description: 'rent', amount: -3200, createdAt: 0}))
// store.dispatch(addExpense({description: 'beer', amount: 120}))
// // store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 50000}))
//
// store.dispatch(setTextFilter('ee'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(125))
