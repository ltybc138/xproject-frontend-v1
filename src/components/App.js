import React, {Component, PureComponent} from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import Main from "./Main";
import {connect} from "react-redux";
import {Switch, withRouter} from "react-router";
import {Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Login from "./Login";
import Registration from "./Registration";
import UserInfo from "./UserInfo";

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<header>*/}
                {/*</header>*/}
                    <NavBar/>
                <Main/>
                {/*<Switch>*/}
                    {/*<Route exact path="/" component={Home}/>*/}
                    {/*<Route path="/cart" component={Cart}/>*/}
                    {/*<Route path="/catalog" component={Catalog}/>*/}
                    {/*<Route path="/login" component={Login}/>*/}
                    {/*<Route path="/registration" component={Registration}/>*/}
                    {/*<Route path="/user" component={UserInfo}/>*/}
                {/*</Switch>*/}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         items: state
//     }
// };

// TODO remove connect method(not needed)
// export default withRouter(connect(mapStateToProps) (App));
export default withRouter(App);