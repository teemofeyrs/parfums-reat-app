import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {singIn} from "../redux/reducers/SingInReducer";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";



const SignInScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const {userInfo,loading,error} = auth;
    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const singInHandler = (e) => {
        e.preventDefault();
        dispatch(singIn(email,password))
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo]);
    return (
        <div>

            <form onSubmit={singInHandler}>
                {
                    loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> : null
                }
                <div>
                    <h2>Вход</h2>
                </div>

                <div>
                    <label htmlFor='email'>Ваш Email</label>
                    <input type="email" name="email" value={email}
                           placeholder='Введите ваш email' onChange={event => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Ваш пароль</label>
                    <input type="password" name="password" value={password}
                           placeholder='Введите ваш пароль' onChange={event => setPassword(event.target.value)}/>
                </div>
                <div>
                    <label />
                    <button type='submit' className='primary block'>Войти</button>
                </div>
                <div>
                    Новый пользователь { '? '} <Link to={`/register?redirect=${redirect}`}>Создать аккаунт</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInScreen;