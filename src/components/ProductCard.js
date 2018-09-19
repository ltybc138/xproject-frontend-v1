import React, {Component, PureComponent} from 'react';
import "../styles/CardStyle.css";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import {addProductToBasket, removeProductFromBasket} from "./store/actions/actionCreators";
import { bindActionCreators } from "redux";
import {withRouter} from "react-router";

class ProductCard extends PureComponent {
    constructor(props) {
        super(props);
    }

    addButtonClick = (event) => {
        // console.log(this.props.product);
        const product = this.props.product;
        // console.log("ProductCard.props.items", this.props.items);
        console.log(this.props.addProductToBasket(product));
        console.log(this.props);
        // console.log("ProductCard.props.items", this.props.items);
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addProductToBasket
    }, dispatch)
};

export default withRouter(connect(null, mapDispatchToProps) (ProductCard));