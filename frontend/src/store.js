import data from "./data";
import {applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { productListReducer } from "./reducers/productReducers";

const initailState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initailState, composeEnhancer(applyMiddleware(thunk)));

export default store;