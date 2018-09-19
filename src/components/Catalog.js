import React, {Component, PureComponent} from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";
import ServerErrorPage from "./error-pages/ServerErrorPage";
import {withRouter} from "react-router";

class Catalog extends PureComponent {
    constructor(props) {
        super(props);

        const category = this.findCategoryFromQuery();
        this.state = {
            category: category,
            failedToConnect: false,
            products: []
        };
        console.log(this.props);
    }

    findCategoryFromQuery() {
        const tag = this.props.match.params.tag;
        let category = "";
        if (tag !== undefined) {
            category = tag.substring(1, tag.length);
        }
        return category;
    }

    componentDidMount() {
        const host = "http://localhost:8090/products";
        let request = host;
        if (this.state.category.length > 0) {
            request += "?categoryTag=" + this.state.category;
        }
        console.log(this.props.match.params.tag);
        console.log("Trying to request: " + request);
        axios.get(request)
            .then(res => {
                const data = res.data;
                this.setState({products: data});
                console.log(this.state.products);
            })
            .catch(error => {
                console.log(error);
                this.setState({failedToConnect: true});
            })
    }

    render() {
        const productCards = this.state.products.map(product => (
            <div className="col-xl-4" key={product.title}><ProductCard product={product}/></div>
        ));

        return (
            <div className="bodyContainer">
                <div className="d-flex justify-content-center"><h1>{this.state.category === "" ? "Catalog" : this.state.category}</h1></div>
                {this.state.failedToConnect ?
                    <ServerErrorPage/>
                    :
                    <div className="container">
                        <div className="row">
                            {productCards}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(Catalog);