import {createStore} from 'redux';

//Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  })

const decrementCount = ({decrementBy = -1} = {}) => ({
  type:'DECREMENT',
  decrementBy
})

const set = ({count}) => ({
  type: 'SET',
  count
})

const reset = () => ({
  type: 'RESET',

})
const store = createStore((state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
    return {
      count: state.count = action.count
    }
    case 'RESET':
      return {
          count: state.count = 0
        }
    default:
      return state;
  }

});

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(set({count: 100}))
store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(decrementCount({ decrementBy: 100}))
store.dispatch(reset())
// store.dispatch({
//   type: 'SET',
//   set: 50
// })
