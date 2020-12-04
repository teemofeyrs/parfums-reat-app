import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {useSelector} from "react-redux";
import CartScreen from "./screens/CartScreen";

function App(props) {

    const cart = useSelector(state => (state.cart))
    const {cartItems} = cart;
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
                        <Link to='/singin'>Sign In</Link>
                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={CartScreen}/>
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
