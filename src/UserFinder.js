import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from "./UserInfo";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UserFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            userData: {},
            loaded: false
        };
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    handleSubmit = (event) => {
        axios.get("http://localhost:8090/users/" + this.state.name)
            .then(res => {
                this.setState({
                    loaded: true,
                    userData: res.data
                });
                console.log("Loaded data: " + res);
            }).catch(error => {
                console.log(error);
        });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="user" className="mr-sm-2">User</Label>
                        <Input type="text" name="name" id="user" placeholder="admin" value={this.state.name} onChange={this.onNameChange}/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
                {this.state.loaded ? <UserInfo data={this.state.userData}/> : ""}
                </div>
        );
    }
}
{/*<form onSubmit={this.handleSubmit}>*/}
    {/*<label>*/}
        {/*Name: <input type="text" value={this.state.name} onChange={this.onNameChange}/>*/}
    {/*</label>*/}
{/*</form>*/}
{/*<input type="submit" value="submit"/>*/}
{/*{this.state.loaded ? <UserInfo data={this.state.userData}/> : ""}*/}

export default UserFinder;