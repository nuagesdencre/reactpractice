import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";


import reducers from './reducers'
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));
// middleware
// allowing use of functions for action creators
// and returning a plain Javascript object ultimately

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)