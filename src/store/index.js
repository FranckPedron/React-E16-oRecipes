import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

import apiMW from '../middlewares/api';
import loginMW from "../middlewares/login";

const middlewares = applyMiddleware(apiMW, loginMW);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
