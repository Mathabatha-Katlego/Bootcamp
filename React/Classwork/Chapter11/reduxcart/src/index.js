import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");

var store = createStore(cartReducer); //creating our store with cartreducer as an argument.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    destination
);