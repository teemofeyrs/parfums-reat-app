import * as axios from "axios";

/* constants */
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
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
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) ;
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({
        type: DELETE_ITEM_FROM_CART, payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) ;
}
/* reducer */
const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type){
        case ADD_ITEM_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find( p => p.product === item.product);
            if(existItem){
                return {...state, cartItems: state.cartItems.map(p => (
                    p.product === existItem.product ? item : p
                    ))}
            }else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        case DELETE_ITEM_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter( i => i.product !== action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;