import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {useDispatch, useSelector} from "react-redux";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import {singOut} from "./redux/reducers/SingInReducer";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";

function App(props) {

    const cart = useSelector(state => (state.cart));
    const {cartItems} = cart;
    const auth = useSelector(state => state.auth);
    const {userInfo} = auth;
    const dispatch = useDispatch();


    const singOutHandler = () => {
        dispatch(singOut())
    }
    return (
        <BrowserRouter>
            <div className='grid-container'>
                <header className='row'>
                    <div>
                        <Link to='/' className='brand'>parfumas</Link>
                    </div>

                    <div>
                        <Link to='/cart'>Cart
                            {cartItems.length > 0 ? (<span className='badge'>{cartItems.length}</span>) : null}
                        </Link>
                        {
                            userInfo ? (
                                <div className='dropdown'>
                                    <Link to='/'>{userInfo.name} <i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                    <ul className='dropdown-content'>
                                        <Link to='/signin' onClick={singOutHandler}>Выйти</Link>
                                    </ul>
                                </div>
                            ) : ( <Link to='/signin'>Sign In</Link>)
                        }

                    </div>
                </header>
                <main>
                    <Route path="/signin" component={SignInScreen}/>
                    <Route path="/register" component={RegisterScreen}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/shipping" component={ShippingScreen}/>
                    <Route path="/" component={HomeScreen} exact/>
                    <Route path="/product/:id" component={ProductScreen}/>
                </main>
                <footer className='row center'>
                    <span>All right reserved</span>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
