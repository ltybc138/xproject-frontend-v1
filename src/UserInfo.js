import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <h3>UserData: </h3>
                <p>Id: {data.id}</p>
                <p>Login: {data.login}</p>
                <p>Password: {data.password}</p>
                <p>Email: {data.email}</p>
                <p>PhoneNum: {data.phone}</p>
                <p>Role: {data.role}</p>
            </div>
        );
    }
}

export default UserInfo;