import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, logIn} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(logIn())}>Login</button>
      {isLogged && <h3>Shouldnt see !</h3>}
    </div>
  );
}

export default App;
