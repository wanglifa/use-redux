import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const stateChange = (state = 0, action) => {
    if (action.type === "add") {
        let newState = state + action.payload;
        return newState;
    } else {
        return state;
    }
}
const store = createStore(stateChange)
function render() {
    ReactDOM.render(
        <App store={store}/>, 
        document.getElementById('root')
    );
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

