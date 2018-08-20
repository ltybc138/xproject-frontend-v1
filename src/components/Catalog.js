import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        const host = "http://localhost:8090/products";
        const request = host; // TODO add category to request if need
        axios.get(request)
            .then(res => {
                const data = res.data;
                this.setState({products: data});
                console.log(this.state.products);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const productCards = this.state.products.map(product => (
            <li key={product.title}><ProductCard product={product}/></li>
        ));
        return (
            <div className="bodyContainer">
                <ul>
                    {productCards}
                </ul>
            </div>
        );
    }
}

export default Catalog;