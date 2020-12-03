import React, {useEffect} from 'react';
import {addToCart} from "../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[productId, qty, dispatch])
    return(
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : Product ID : {productId}</p>
            <p>ADD TO CART : QTY : {qty}</p>
        </div>
    );
}

export default CartScreen;