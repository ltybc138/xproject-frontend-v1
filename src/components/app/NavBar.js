import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import accLogo from '../../res/account_48dp.png';
import cartLogo from '../../res/shopping_cart_48dp.png';
import {withRouter} from "react-router";

class NavBar extends PureComponent {
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

    // TODO replace links with new components rendering links called UpdateBlock.js
    getAllCategories() {
        // TODO replace host string to properties file
        axios.get("http://localhost:8090/categories")
            .then(res => {
                const data = res.data.map((x) => {
                    return x.category;
                });

                // todo the problem here might happen when uri changes from catalog to ?categoryTag=... .React might think that uri did not changed
                const list = res.data.map((category) =>
                    <Link className="dropdown-item" to={"/catalog/:" + category.tag}
                             key={category.category}>{category.category}</Link>
                );

                this.setState({
                    categories: data,
                    listCategories: list
                });
                console.log(res.data);
            })
    }

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        });
    };

    onSearchClick = (event) => {
        console.log(this.state.search);
        alert("Your search request: " + this.state.search);
        event.preventDefault();
    };

    render() {
        return (
            <div className="navbar navbar-expand-sm bg-light navbar-light fixed-top" role="navigation">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link className="navbar-brand" to="/catalog">Brand</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                                Categories
                            </Link>
                            <div className="dropdown-menu">
                                {this.state.listCategories}
                                </div>
                        </li>
                    </ul>
                    <ul className="nav nabar-nav">
                        <li>
                            <form className="form-inline" onSubmit={this.onSearchClick}>
                                <input type="text" placeholder="Search" className="form-control mr-sm-2"
                                       onChange={this.handleSearchChange}/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li>
                            <img src={cartLogo} alt="" className="nav-logo"/>
                        </li>
                        <li>
                            <Link to="/cart" className="nav-link">0 Items</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li>
                            <img src={accLogo} alt="" className="nav-logo"/>
                        </li>
                        <li>
                            <Link to="/user" className="nav-link">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);