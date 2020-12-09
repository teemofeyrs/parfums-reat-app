import React, {useState} from 'react';
import {Link} from "react-router-dom";


const SignInScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const singInHandler = () => {

    }
    return (
        <div>
            <form onSubmit={singInHandler}>
                <div>
                    <h2>Регистрация</h2>
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
                    Новый пользователь { '? '} <Link to='/register'>Создать аккаунт</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInScreen;