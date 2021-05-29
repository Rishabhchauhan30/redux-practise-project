import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth';

// import redux
// import redux from 'redux'; // it will import everything 
// import { createStore } from 'redux';


// const counterReducer = (currentState = initialState,  action) => {
//       if(action.type === 'increment') {
//             return {
//                   counter : currentState.counter + 1,
//                   showToggle: currentState.showToggle,
//             }
//       };

//       if(action.type === 'increase') {
//             return {
//                   counter : currentState.counter + action.amount,
//                   showToggle: currentState.showToggle,
//             }
//       }

//       if(action.type === 'decrement') {
//             return {
//                   counter : currentState.counter - 1,
//                   showToggle: currentState.showToggle,
//             }
//       };

//       if(action.type === 'toggle') {
//             return {
//                   showToggle : !currentState.showToggle,
//                   counter : currentState.counter,
//             }
//       };

//       return currentState;
// };

// create store


const store = configureStore({
      reducer : { counter: counterReducer, auth: authReducer },
});

export default store;
