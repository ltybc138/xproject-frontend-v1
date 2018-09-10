import React, { Component } from 'react';
import "../styles/CardStyle.css";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import {addProductToBasket, getBasket} from "./store/actions/actionCreators";
import { bindActionCreators } from "redux";

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    addButtonClick = (event) => {
        // console.log(this.props.product);
        const product = this.props.product;
        console.log(this.props.getBasket());
        console.log(this.props.addProductToBasket(product));
        console.log(this.props.getBasket());
    };

    render() {
        const product = this.props.product;
        return (
            <div>
                <Card className="card">
                    <CardImg className="cardImage" top src={product.imageSrc} alt="Card image" />
                    <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        {/*<CardSubtitle>Sub</CardSubtitle>*/}
                        <CardText>{product.price} $</CardText>
                        <Button onClick={this.addButtonClick}>Add</Button>
                    </CardBody>
                </Card>
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
        getBasket
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps) (ProductCard);