import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            search: ""
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        });
    };

    onSearchClick = (event) => {
        console.log(this.state.search);
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top" role="navigation">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a className="navbar-brand" href="#">Brand</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Categories
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link</a>
                                    <a className="dropdown-item" href="#">Link</a>
                                    <a className="dropdown-item" href="#">Link</a>
                                    <a className="dropdown-item" href="#">Link</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav nabar-nav">
                            <li>
                                <form className="form-inline" onSubmit={this.onSearchClick}>
                                    <input type="text" placeholder="Search" className="form-control mr-sm-2" onChange={this.handleSearchChange}/>
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li>
                                <img src="#"/>
                            </li>
                            <li>
                                <a href="/users" className="nav-link">2 Items</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li>
                                <img src="#"/>
                            </li>
                            <li>
                                <a href="/products" className="nav-link">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*<nav className="navbar navbar-default" role="navigation">*/}
                    {/*<div className="navbar-header">*/}
                        {/*<button type="button" className="navbar-toggle" data-toggle="collapse"*/}
                                {/*data-target=".navbar-collapse">*/}
                            {/*<span className="icon-bar"></span>*/}
                            {/*<span className="icon-bar"></span>*/}
                            {/*<span className="icon-bar"></span>*/}
                        {/*</button>*/}
                    {/*</div>*/}
                    {/*<div className="navbar-collapse collapse">*/}
                        {/*<ul className="nav navbar-nav">*/}
                            {/*<li><a href="#">Left</a></li>*/}
                        {/*</ul>*/}
                        {/*<ul className="nav navbar-nav navbar-center">*/}
                            {/*<li><a href="#">Center</a></li>*/}
                            {/*<li><a href="#">Center</a></li>*/}
                            {/*<li><a href="#">Center</a></li>*/}
                        {/*</ul>*/}
                        {/*<ul className="nav navbar-nav navbar-right">*/}
                            {/*<li><a href="#">Right</a></li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                {/*</nav>*/}
            </div>
        );
    }
}

export default NavBar;