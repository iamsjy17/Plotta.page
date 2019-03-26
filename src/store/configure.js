import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from 'modules';

const reducers = combineReducers(modules);
const midddlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
// eslint-disable-next-line no-underscore-dangle
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// eslint-disable-next-line max-len
const configure = preloadedState => createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...midddlewares)));

export default configure;
