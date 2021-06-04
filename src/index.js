import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import destinationReducer from './Reducers/destinationReducer'

const initialState = {
  destinations: [],
  addedDestinations: []
}

const store = createStore(destinationReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

