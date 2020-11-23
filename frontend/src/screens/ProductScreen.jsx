import React from 'react';
import Rating from "../components/Rating";
import data from "../data";
import {Link} from "react-router-dom";

const ProductScreen = (props) => {
    debugger
    const {parfums} = data;
    const product = parfums.find((p) => p._id === +props.match.params.id);
    if (!product) {
        return <div>Извините, товар не найден...</div>
    }
    return (
        <>
            <Link to="/">Вернутся к обратно</Link>
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
                            {product.price}
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
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Размер</div>
                                    <div>{product.size}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Добавить в корзину</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductScreen;