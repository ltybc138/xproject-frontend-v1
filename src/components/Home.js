import React, { Component } from 'react';
import {withRouter} from "react-router";

function Home(props) {
    return (
        <div className="bodyContainer">
            <h1>Home</h1>
        </div>
    )
}

export default withRouter(Home);