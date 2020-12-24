import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import CheckoutSteps from "../components/CheckoutSteps";


const ShippingScreen = (props) => {
    const [city, setCity] = useState('');
    const [numberBranch, setNumberBranch] = useState('');
    const shippingAddress = useSelector(state => state.shippingAddress);
    const {address, loading, error} = shippingAddress;
    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const singInHandler = (e) => {
        e.preventDefault();

    }
    /*useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo]);*/
    return (
        <div>
            <CheckoutSteps step1 step2/>
            <form onSubmit={singInHandler}>
                {
                    loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> : null
                }
                <div>
                    <h2>Адрес доставки</h2>
                </div>
                <div>
                    <label htmlFor='city'>Выберите ваш город</label>
                    <input type="text" name="city" value={city}
                           placeholder='Введите ваш город' onChange={event => setCity(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor='numberBranch'>Выберите отделение</label>
                    <input type="text" name="numberBranch" value={numberBranch}
                           placeholder='Выберите отделение' onChange={event => setNumberBranch(event.target.value)}/>
                </div>
                <div>
                    <label />
                    <button type='submit' className='primary block'>Продолжить</button>
                </div>
            </form>
        </div>
    );
};

export default ShippingScreen;