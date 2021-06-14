import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import destinationsReducer from './Reducers/DestinationsReducer'



const rootReducer = combineReducers({
  allDestinations: destinationsReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()))



ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

