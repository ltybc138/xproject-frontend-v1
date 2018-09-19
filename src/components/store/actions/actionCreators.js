import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET} from "./actionTypes";

export function addProductToBasket(item) {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        item
    }
}

// TODO replace with id or something like this(not an object)
export function removeProductFromBasket(item) {
    return {
        type: REMOVE_PRODUCT_FROM_BASKET,
        item
    }
}