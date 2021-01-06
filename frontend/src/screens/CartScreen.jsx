import React, {useEffect} from 'react';
import {addToCart, removeFromCart} from "../redux/reducers/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import MessageBox from "../components/MessageBox";
import {Link} from "react-router-dom";
import {toNumUSD} from "../utils";

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector(state => (state.cart))
    const {usd} = useSelector(state => (state.productsList))
    const currency = toNumUSD(usd.rate)
    const {cartItems} = cart;
    const onDeleteCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }
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
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                                <select value={item.qty} onChange={(e) =>
                                                    (dispatch(addToCart(item.product, Number(e.target.value))))} >
                                                    {[...Array(10).keys()].map(value => (
                                                        <option key={value+1} value={value+1} >{value+1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <p>Цена: {currency*item.price}</p>
                                            </div>
                                            <div>
                                                <button onClick={()=> { onDeleteCartHandler(item.product)}}>Удалить</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                                )}
                            </ul>
                    )
                    }
        </div>
        <div className='col-1'>
            <div className='cart cart-body'>
                <ul>
                    <li>
                        <h2>Общее количество : {cartItems.reduce((a , c) => a + c.qty , 0)} шт.</h2>
                    </li>
                    <li>
                        <h2>Общее сумма : {cartItems.reduce((a , c) => a + (currency*c.price) * c.qty , 0)} грн.</h2>
                    </li>
                    <li>
                        <button type='button' className='primary block' onClick={checkoutHandler} disabled={cartItems.length === 0}>
                            Оформить заказ
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );

}

export default CartScreen;