import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { compose, createStore } from "redux";
import MainReducer from "./components/store/reducers/MainReducer";
import { Provider } from "react-redux";
import BasketReducer from "./components/store/reducers/BasketReducer";

// compose for enabling redux dev tools extension
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(BasketReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
