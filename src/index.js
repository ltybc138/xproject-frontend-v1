import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {connectRouter, routerMiddleware, ConnectedRouter} from "connected-react-router"
import BasketReducer from "./components/store/reducers/BasketReducer";
import {createBrowserHistory} from "history";
import MainReducer from "./components/store/reducers/MainReducer";

// compose for enabling redux dev tools extension
// const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(BasketReducer);

// const store = createStore(BasketReducer);
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
        {/*<Router>*/}
            {/*<App/>*/}
        {/*</Router>*/}
    </Provider>
    , document.getElementById('root')
);
