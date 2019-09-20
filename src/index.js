import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const stateChange = (state = { n: 0 }, action) => {
    if (action.type === "add") {
        let newState = { n: state.n + action.payload };
        return newState;
    } else {
        return state;
    }
}
const store = createStore(stateChange)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);


