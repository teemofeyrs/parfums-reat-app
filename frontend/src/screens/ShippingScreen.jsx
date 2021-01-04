import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import CheckoutSteps from "../components/CheckoutSteps";
import {setAddress, setBranches, setCities} from "../redux/reducers/ShippingReducer";


const ShippingScreen = (props) => {
    const [city, setCity] = useState('');
    const [numberBranch, setNumberBranch] = useState('');
    const {address, cities, branches, loading, error} = useSelector(state => state.shippingAddress);
    const {userInfo} = useSelector(state => state.auth);
    if(!userInfo){
        props.history.push('/signin')
    }

    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const singInHandler = (e) => {
        e.preventDefault();
        dispatch(setAddress({city, numberBranch}))
    }
    useEffect(()=>{
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
                    <label htmlFor='city'>Выберите ваш город <small>( введите первые буквы...)</small></label>
                    <input type='text' list='city' name='city' value={city}
                           placeholder='Введите ваш город' onChange={event => setCity(event.target.value)} required/>
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
                        {branches ? branches.map(branch => ( <option key={branch.Description} value={branch.Description}/>)) : null}
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