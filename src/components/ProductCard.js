import React, { Component } from 'react';
import "../styles/CardStyle.css";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        return (
            <div>
                <Card className="card">
                    <CardImg className="cardImage" top src={product.imageSrc} alt="Card image" />
                    <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        <CardSubtitle>Sub</CardSubtitle>
                        <CardText>Text</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ProductCard;