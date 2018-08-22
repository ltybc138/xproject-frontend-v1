import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Login from "./Login";
import Registration from "./Registration";
import Cart from "./Cart";

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
            </div>
        );
    }
}

export default Main;