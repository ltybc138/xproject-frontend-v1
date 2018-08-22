const cart = [];

class Store {

    static addProductToCart = (product) => {
        cart.push(product);
    };

    static getCart = () => {
        return cart.length;
    };
}

export default Store;