import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {Provider} from "react-redux";
import store from "./redux/store";
import CartScreen from "./screens/CartScreen";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='grid-container'>
                    <header className='row'>
                        <div>
                            <Link to='/' className='brand'>parfumas</Link>
                        </div>

                        <div>
                            <Link to='/cart'>Cart</Link>
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
        </Provider>
    );
}

export default App;
