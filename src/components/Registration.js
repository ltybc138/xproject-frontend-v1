import React, {Component, PureComponent} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {withRouter} from "react-router";

class Registration extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: "",
            email: "",
            password: "",
            phone: ""
        }
    }

    onLoginChange = (event) => {
        this.setState({
            login: event.target.value
        });
    };

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    onPhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        });
    };

    submit = (event) => {
        // TODO connect to server and try to create a new account
        const data = this.state;
        console.log("login=" + data.login + "  password=" + data.password +
            "  email=" + data.email + "  phone=" + data.phone);
        event.preventDefault();
    };

    render() {
        return (
            <div className="bodyContainer formContainer">
                <h1>Registration page</h1>
                <Form onSubmit={this.submit}>
                    <FormGroup row>
                        <Label for="login" sm={2}>Login</Label>
                        <Col sm={10}>
                            <Input type="text" name="login" id="login" placeholder="Type you login" onChange={this.onLoginChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Type you email" onChange={this.onEmailChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="password" placeholder="Type you password" onChange={this.onPasswordChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phone" sm={2}>Phone</Label>
                        <Col sm={10}>
                            <Input type="number" name="phone" id="phone" placeholder="Type you phone" onChange={this.onPhoneChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <a href="/login">Already have an account?</a>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(Registration);