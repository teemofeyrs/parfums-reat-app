import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import {setPayment} from "../redux/reducers/cartReducer";


const PaymentScreen = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('LiqPay');
    const {address} = useSelector(state => state.shippingAddress);
    if(!address){
        props.history.push('/shipping')
    }

    const dispatch = useDispatch();

    const paymentHandler = (e) => {
        e.preventDefault();
        dispatch(setPayment(paymentMethod))
        props.history.push('/placeorder')
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>
            <form onSubmit={paymentHandler}>
                <div>
                    <h2>Способ оплаты</h2>
                </div>
                <div>

                    <input type='radio' id='liqpay' name='paymentMethod' value='LiqPay' checked
                           placeholder='Введите ваш город' onChange={event => setPaymentMethod(event.target.value)} required/>
                    <label htmlFor='liqpay'>LiqPay (оплата картой)</label>
                </div>
                <div>
                    <input type="radio" id='COD'  name="paymentMethod" value='Наложенный платеж'
                            onChange={event => setPaymentMethod(event.target.value)}
                            required/>
                    <label htmlFor='COD'>Наложенный платеж</label>
                </div>
                <div>
                    <label />
                    <button type='submit' className='primary block'>Продолжить</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentScreen;