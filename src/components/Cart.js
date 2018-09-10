import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {addProductToBasket, getBasket, removeProductFromBasket} from "./store/actions/actionCreators";
import {connect} from "react-redux";

class Cart extends Component {
    render() {
        console.log(this.props.items);
        const products = this.props.items;
        const listOfItems = products.map(product => {
            return (
                <li key={product.title}>{product.title}</li>
            )
        });
        return (
            <div className="bodyContainer">
                <h1>Cart</h1>
                <p>{console.log("Cart props=" + this.props)}</p>
                <ul>
                    {listOfItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addProductToBasket,
        removeProductFromBasket,
        getBasket
    }, dispatch)
};

export default connect(mapStateToProps,  mapDispatchToProps) (Cart);