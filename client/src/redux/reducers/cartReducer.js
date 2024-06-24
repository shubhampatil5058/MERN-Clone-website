import * as actionTypes from '../constants/cartConstants';
const initialState = {
    cartItems: [],
    shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(product => product.id === item.id);
            if (existItem) {
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        case 'SAVE_SHIPPING_INFO':
            return {
                ...state,
                shippingInfo: action.payload
            };
        default:
            return state;
    }
};
