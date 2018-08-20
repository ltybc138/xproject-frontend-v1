import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios';
import accLogo from '../res/account_48dp.png';
import cartLogo from '../res/shopping_cart_48dp.png';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            search: "",
            categories: [],
            listCategories: ""
        }
    }

    componentDidMount() {
        this.getAllCategories();
    }

    getAllCategories() {
        // TODO replace host string to properties file
        axios.get("http://localhost:8090/categories")
            .then(res => {
                const data = res.data.map((x) => {
                    return x.category;
                });
                const list = data.map((category) =>
                    <a className="dropdown-item" href="#" key={category}>{category}</a>
                );
                this.setState({
                    categories: data,
                    listCategories: list
                });
                console.log(data);
            })
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
                <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top" role="navigation">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a className="navbar-brand" href="/catalog">Brand</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Categories
                                </a>
                                <div className="dropdown-menu">
                                    {this.state.listCategories}
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
                                <img src={cartLogo} className="nav-logo"/>
                            </li>
                            <li>
                                <a href="/cart" className="nav-link">0 Items</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li>
                                <img src={accLogo} className="nav-logo"/>
                            </li>
                            <li>
                                <a href="/login" className="nav-link">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default NavBar;