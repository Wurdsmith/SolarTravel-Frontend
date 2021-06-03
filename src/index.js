import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {destinations: []}

const store = createStore(listsReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router>
    <Provider store = {store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

