import React, {PureComponent} from 'react';
import {Route} from "react-router-dom";
import Home from "../pages/catalog/Home";
import Catalog from "../pages/catalog/Catalog";
import Login from "../pages/user/Login";
import Registration from "../pages/user/Registration";
import Cart from "../pages/cart/Cart";
import UserInfo from "../pages/user/UserInfo";
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