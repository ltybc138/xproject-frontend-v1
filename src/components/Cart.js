import React, { Component } from 'react';
import Store from '../Store';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        console.log(Store.getCart());
    }

    render() {
        return (
            <div className="bodyContainer">
                <h1>Cart</h1>
            </div>
        );
    }
}

export default Cart;