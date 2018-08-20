import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavBar/>
                </header>
                <Main/>
            </div>
        );
    }
}

export default App;
