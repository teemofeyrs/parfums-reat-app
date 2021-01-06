import React, {useEffect, useState} from 'react';
import Rating from "../components/Rating";
import {Link} from "react-router-dom";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../redux/reducers/productDetailsReducer";
import {toNumUSD} from "../utils";

const ProductScreen = (props) => {
    const productId = props.match.params.id
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails);
    const {usd} = useSelector(state => state.productsList);
    const {loading, product, error} = productDetails;
    const dispatch = useDispatch();
    const currency = toNumUSD(usd.rate)
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [productId])
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <>
            {
                loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> :
                    <div>
                        <Link to="/"> Вернутся к обратно</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img className='large' src={product.image} alt={product.name}/>
                            </div>
                            <div className="col1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>
                                    </li>
                                    <li>
                                        <Rating rating={product.rating}/>
                                    </li>
                                    <li>
                                        {currency*product.price}
                                    </li>
                                    <li>
                                        <p>{product.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="cart cart-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Цена</div>
                                                <div className="price">{currency*product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>количество</div>
                                                <div>
                                                    <select value={qty} onChange={event => {
                                                        setQty(event.target.value);
                                                    }}>
                                                        {[...Array(10).keys()].map(value => (
                                                            <option key={value+1} value={value+1} >{value+1}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Размер</div>
                                                <div>{product.size}ml</div>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={addToCartHandler} className="primary block">Добавить в корзину</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    );
}

export default ProductScreen;