import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {connectRouter, routerMiddleware, ConnectedRouter} from "connected-react-router"
import BasketReducer from "./reducers/BasketReducer";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(BasketReducer),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
