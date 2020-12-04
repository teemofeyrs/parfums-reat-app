import React, {useEffect} from 'react';
import {addToCart} from "../redux/reducers/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import MessageBox from "../components/MessageBox";
import {Link} from "react-router-dom";

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector(state => (state.cart))
    const {cartItems} = cart;

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[productId, qty, dispatch])
    return(
        <div className='row top'>
            <div className='col-2'>
                <h2>Корзина</h2>
                {
                    cartItems.length === 0 ?
                        (<MessageBox>Корзина пуста, <Link to="/">За покупками</Link></MessageBox>) :
                        (
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img className='small' src={item.image} alt={item.name}/>
                                            </div>
                                            <div className='min-30'>
                                                <Link to={`product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                                <select value={item.qty} onChange={(e) => (addToCart(item.product, e.target.value))} id="">
                                                    {[...Array(10).keys()].map(value => (
                                                        <option key={value+1} value={value+1} >{value+1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                )
                                )}
                            </ul>
                    )
                    }
        </div>
        </div>
    );

}

export default CartScreen;