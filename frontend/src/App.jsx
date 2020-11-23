import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {

      return (
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
