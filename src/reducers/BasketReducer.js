import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET} from "../actions/actionTypes";

const INITIAL_DATA = {
    items: [
        {
            "id": 1,
            "title": "Apple MacBook Pro 13'",
            "price": 1299.0,
            "imageSrc": "https://www.re-store.ru/upload/resize_cache/iblock/7d6/1120_770_17f5c944b3b71591cc9304fac25365de2/7d67229c35ddcfd8df81984fd6985c1f.jpg",
            "category": {"id": 2, "category": "Computers", "tag": "computers"}
        },
        {
            "id": 2,
            "title": "Apple MacBook Pro 15'",
            "price": 1799.0,
            "imageSrc": "https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/space/mbp15touch-space-select-201807_GEO_GB?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1531167673902",
            "category": {"id": 2, "category": "Computers", "tag": "computers"}
        }
    ]
};

function BasketReducer(state = INITIAL_DATA, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            console.log("BasketReducer.state.items:" + state.items);
            state = {
                items: [
                    ...state.items,
                    action.item
                ]
            };
            console.log("BasketReducer.state.items:" + state.items);
            return state;
        case REMOVE_PRODUCT_FROM_BASKET:
            // TODO replace this shit
            return state.filter(item => item.id === action.item.id);
        default:
            return state;
    }
}

export default BasketReducer;