import React, { Component } from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    submit = (event) => {
        // TODO connect to server to verify if login and password are valid
        console.log("Submit! email=" + this.state.email + ",    password=" + this.state.password);
        event.preventDefault();
    };

    render() {
        return (
            <div className="bodyContainer">
                <h1>Login Page</h1>
                <Form onSubmit={this.submit}>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col>
                            <Input type="email" name="email" id="email" placeholder="Type your email" onChange={this.onEmailChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col>
                            <Input type="password" name="password" id="password" placeholder="Type your password" onChange={this.onPasswordChange}/>
                        </Col>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;