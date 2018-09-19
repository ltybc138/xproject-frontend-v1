import React, { PureComponent } from 'react';
import {withRouter} from "react-router";

class Home extends PureComponent {
    render() {
        return (
            <div className="bodyContainer">
                <h1>Home</h1>
            </div>
        );
    }
}

export default withRouter(Home);