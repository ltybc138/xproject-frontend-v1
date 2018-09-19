import React, {PureComponent} from 'react';
import {bindActionCreators} from "redux";
import {addProductToBasket, removeProductFromBasket} from "../../../actions/actionCreators";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Cart extends PureComponent {
    render() {
        console.log("Cart.props.items" + this.props.items);
        const products = this.props.items;
        const listOfItems = products.map(product => {
            return (
                <li key={product.title}>{product.title}</li>
            )
        });
        return (
            <div className="bodyContainer">
                <h1>Cart</h1>
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
        removeProductFromBasket
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Cart));