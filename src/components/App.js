import React, {Component} from 'react';
import '../styles/App.css';
import NavBar from "./app/NavBar";
import Main from "./app/Main";
import {withRouter} from "react-router";
import Footer from "./app/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(App);