import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";

class Catalog extends Component {
    constructor(props) {
        super(props);

        const category = this.findCategoryFromQuery(this.props);
        this.state = {
            category: category,
            products: []
        };
        console.log(this.props);
    }

    findCategoryFromQuery(props) {
        let category = "";
        const query = props.location.search;
        let isCategoryStarted = false;
        for (let i = 0; i < query.length; i++) {
            if (isCategoryStarted) {
                category += query[i];
            }
            if (query[i] === '=') {
                isCategoryStarted = true;
            }
        }
        return category;
    }

    componentDidMount() {
        const host = "http://localhost:8090/products";
        const request = host + this.props.location.search; // Add request params for category
        console.log("Trying to request: " + request);
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
            <div className="col-xl-4" key={product.title}><ProductCard product={product}/></div>
        ));
        // const productCards = this.state.products.map(product => {
        //    <ProductCard product={product}/>
        // });
        const rowsCount = Math.ceil(productCards.length / 4);
        return (
            <div className="bodyContainer">


                <div className="d-flex justify-content-center"><h1>{this.state.category}</h1></div>
                <div className="container">
                    <div className="row">
                        {productCards}
                    </div>
                </div>

                {/*<ul>*/}
                    {/*{productCards}*/}
                {/*</ul>*/}
            </div>
        );
    }
}

export default Catalog;