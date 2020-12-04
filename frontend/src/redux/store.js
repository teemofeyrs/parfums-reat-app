import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    productsList: productReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store;