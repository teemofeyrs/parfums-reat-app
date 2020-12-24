import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import SingInReducer from "./reducers/SingInReducer";
import RegisterReducer from "./reducers/RegisterReducer";
import ShippingReducer from "./reducers/ShippingReducer";

const initState = {
    auth: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart : {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
    shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    productsList: productReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    auth: SingInReducer,
    registerUser: RegisterReducer,
    shippingAddress: ShippingReducer,

});

const store = createStore(reducers, initState,  composeEnhancers(applyMiddleware(thunk)))
export default store;