import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, GET_BASKET} from "./actionTypes";

export const addProductToBasket = item => ({
    type: ADD_PRODUCT_TO_BASKET,
    item
});

// TODO replace with id or something like this(not an object)
export const removeProductFromBasket = item => ({
    type: REMOVE_PRODUCT_FROM_BASKET,
    item
});

export const getBasket = () => ({
    type: GET_BASKET
});