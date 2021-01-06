import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {toNumUSD} from "../utils";

const PlaceorderScreen = (props) => {
    const {address} = useSelector(state => state.shippingAddress);
    const {cartItems, paymentMethod} = useSelector(state => state.cart);
    if(!paymentMethod){
        props.history.push('/payment')
    }
    const {usd} = useSelector(state => (state.productsList))
    const currency = toNumUSD(usd.rate)
    const toPrice = (num) => Number(num.toFixed(2));
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <div className='row top'>
                <div className='col-2'>
                    <ul>
                        <li>
                            <div className='cart cart-body'>
                                <h2>Доставка</h2>
                                <p><strong>Имя получателя:</strong><span> {address.fullName}</span></p>
                                <p><strong>Ваш телефон:</strong><span> {address.phone}</span></p>
                                <p><strong>Адресс доставки:</strong><span> {address.city}, {address.numberBranch}</span></p>
                            </div>
                        </li>
                        <li>
                            <div className='cart cart-body'>
                                <h2>Способ оплаты</h2>
                                <p><strong>Способ оплаты:</strong><span> {paymentMethod}</span></p>
                            </div>
                        </li>
                        <li>
                            <div className='cart cart-body'>
                                <h2>Список товаров которые вы заказиваете</h2>
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
                                                        <p>количество: {item.qty} x Цена: {item.price} = {item.qty* item.price}</p>
                                                    </div>

                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='cart cart-body'>
                        <p>Price 20$</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceorderScreen;