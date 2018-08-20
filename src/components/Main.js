import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import UserFinder from "./UserFinder";
import Catalog from "./Catalog";

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserFinder} />
                <Route path="/catalog" component={Catalog} />
            </div>
        );
    }
}

export default Main;