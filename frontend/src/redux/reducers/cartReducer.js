import * as axios from "axios";

/* constants */
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

/* thunk */
export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            product: data._id,
            qty
        }
    })
}
const initialState = {
    cartItems: []
}
/* reducer */
const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find( p => p._id === item.product);
            if(existItem){
                return {...state, cartItems: state.cartItems.map(p => (
                    p.product === existItem.product ? item : p
                    ))}
            }else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state;
    }
}
export default cartReducer;