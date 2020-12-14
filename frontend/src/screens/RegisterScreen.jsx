import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import {register} from "../redux/reducers/RegisterReducer";



const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const registerUser = useSelector(state => state.registerUser);
    const {userInfo,loading,error} = registerUser;
    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const registerHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
          alert('Пароли не совпадают!')
        }else{
            debugger
            dispatch(register(name,email,password))
        }
    }
  /*  useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo]);*/
    return (
        <div>

            <form onSubmit={registerHandler}>

                <div>
                    <h2>Создать аккаунт</h2>
                </div>
                {
                    loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> : null
                }
                <div>
                    <label htmlFor='name'>Ваше Имя</label>
                    <input type="text" name="name" value={name}
                           placeholder='Введите ваше Имя' onChange={event => setName(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='email'>Ваш Email</label>
                    <input type="email" name="email" value={email}
                           placeholder='Введите ваш email' onChange={event => setEmail(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='password'>Ваш пароль</label>
                    <input type="password" name="password" value={password}
                           placeholder='Введите ваш пароль' onChange={event => setPassword(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Повторите пароль</label>
                    <input type="password" name="confirmPassword" value={confirmPassword}
                           placeholder='Введите повторно ваш пароль' onChange={event => setConfirmPassword(event.target.value)} required/>
                </div>
                <div>
                    <label />
                    <button type='submit' className='primary block'>Зapeгиcтpиpoвaтьcя</button>
                </div>
                <div>
                    Есть аккаунт { '? '} <Link to={`/signin?redirect=${redirect}`}>Войти</Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterScreen;