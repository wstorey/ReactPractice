import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

//! First example
// // STORE -> GLOBALIZED STATE


// // ACTION INCREMENT
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// // REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// }

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());

//! Second Example

const store = createStore(allReducer);







ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
