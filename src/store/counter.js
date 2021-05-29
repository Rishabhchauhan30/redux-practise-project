import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showToggle: true };

const counterSlice =  createSlice({
      name: 'counter',
      initialState: initialCounterState,
      reducers: {
            increment(currentState) {
                  currentState.counter++;
            },
            decrement(currentState) {
                  currentState.counter--;
            },
            increase(currentState, action) {
                  currentState = currentState.counter + action.payload;
            },
            toggleCounter(currentState) {
                  currentState.showToggle = !currentState.showToggle;
            }
      }
});

export const counterActions =  counterSlice.actions;
export default counterSlice.reducer;