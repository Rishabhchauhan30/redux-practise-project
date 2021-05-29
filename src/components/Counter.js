import { useSelector, useDispatch } from 'react-redux';

import  { counterActions }  from '../store/counter'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // call it and pass a function which will be executed by react-redux, and a piece of data which we want excess from our store
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showToggle);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };


  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 10 });
  // }

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };

 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> { counter } </div>}
      <div>
        <button onClick = { incrementHandler }> ⬆️ Increment ⬆️ </button>
        <button onClick = { decrementHandler }> ⬇️ Decrement ⬇️ </button>
        <button onClick = { increaseHandler }> ⬆️ Increase ⬆️ </button>
        {/* <button onClick = { decrementHandler }> ⬇️ Decrement By 5 ⬇️ </button> */}

      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
}
export default Counter;

// class Counter extends Component {

//    incrementHandler() {
//      this.props.increment();
//    }
//    decrementHandler() {
//      this.props.decrement();
//    }
//    toggleCounterHandler() {}

//   render() {
//       return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> { this.props.counter } </div>
//         <div>
//           <button onClick = { this.incrementHandler.bind(this) }> ⬆️ Increment ⬆️ </button>
//           <button onClick = { this.decrementHandler.bind(this) }> ⬇️ Decrement ⬇️ </button>
//         </div>
//         <button onClick={ this.toggleCounterHandler }>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch ({ type: 'increment'}),
//     decrement: () => dispatch ({ type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Counter);
