import React, {Component, PureComponent} from 'react';
import axios from 'axios';
import Home from "./Home";
import {withRouter} from "react-router";

class UserInfo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        const host = "http://localhost:8090/users/denis";
        const request = host;
        // TODO set up all this shit with redux
        axios.get(request)
            .then(res => {
                const data = res.data;
                this.setState({userData: data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const data = this.state.userData;
        return (
            <div className="bodyContainer">
                <h1>User Info</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Login:</td>
                        <td>{data.login}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>{data.password}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{data.phone === null ? "null" : data.phone}</td>
                    </tr>
                    <tr>
                        <td>Role:</td>
                        <td>{data.role}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(UserInfo);