import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import SingInReducer from "./reducers/SingInReducer";
import RegisterReducer from "./reducers/RegisterReducer";

const initState = {
    auth: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart : {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    productsList: productReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    auth: SingInReducer,
    registerUser: RegisterReducer,
});

const store = createStore(reducers, initState,  composeEnhancers(applyMiddleware(thunk)))
export default store;