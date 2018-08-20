import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Login from "./Login";

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Home} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default Main;