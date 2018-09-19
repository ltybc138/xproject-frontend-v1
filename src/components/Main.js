import React, {Component, PureComponent} from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Login from "./Login";
import Registration from "./Registration";
import Cart from "./Cart";
import UserInfo from "./UserInfo";
import {Switch, withRouter} from "react-router";

class Main extends PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/catalog/:tag" component={Catalog}/>
                    <Route path="/catalog" component={Catalog}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/user" component={UserInfo}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);