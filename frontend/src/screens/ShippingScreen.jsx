import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import CheckoutSteps from "../components/CheckoutSteps";
import {saveAddress, setBranches, setCities} from "../redux/reducers/ShippingReducer";


const ShippingScreen = (props) => {

    const {address, cities, branches, loading, error} = useSelector(state => state.shippingAddress);
    const {userInfo} = useSelector(state => state.auth);
    if(!userInfo){
        props.history.push('/signin')
    }
    const [city, setCity] = useState(address.city);
    const [numberBranch, setNumberBranch] = useState('');
    const [fullName, setFullName] = useState(address.fullName);
    const [phone, setPhone] = useState(address.phone);
    const dispatch = useDispatch();
    const singInHandler = (e) => {
        e.preventDefault();
        dispatch(saveAddress({fullName, phone, city, numberBranch}));
        props.history.push('/payment')
    }
    useEffect(() => {
        if(cities.length === 0){
            dispatch(setCities())
        }
       if(cities.some(el => el.Description === city)) {
           dispatch(setBranches(city))
       }
    },[city]);
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
                    <label htmlFor="fullName">Имя и фамилия Получателя</label>
                    <input type='text'  name='fullName' value={fullName}
                           placeholder='Введите ммя и фамилию получателя' onChange={event => { setFullName(event.target.value)}} required/>
                </div>
                <div>
                    <label htmlFor="phone">Ваш телефон</label>
                    <input type='text'  name='phone' value={phone}
                           placeholder='Введите Ваш телефон в виде +380...' onChange={event => { setPhone(event.target.value)}} required/>
                </div>
                <div>
                    <label htmlFor='city'>Выберите ваш город <small>( введите первые буквы...)</small></label>
                    <input type='text' list='city' name='city' value={city}
                           placeholder='Введите ваш город' onChange={event => {
                               setNumberBranch('')
                        setCity(event.target.value)
                    }} required/>
                    <datalist id='city'>
                        {cities ? cities.map(city => ( <option key={city.Ref} value={city.Description}/>)): null}
                    </datalist>
                </div>
                <div>
                    <label htmlFor='numberBranch'>Выберите отделение</label>
                    <input type="text" list='numberBranch' name="numberBranch" value={numberBranch}
                           placeholder='Выберите отделение' onChange={event => setNumberBranch(event.target.value)}
                           disabled={!city} required/>
                    <datalist id='numberBranch'>
                        {branches ? branches.map(branch => ( <option key={branch.Ref} value={branch.Description}/>)) : null}
                    </datalist>
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