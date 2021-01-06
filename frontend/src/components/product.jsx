import React from 'react';
import Rating from "./Rating";
import {Link} from "react-router-dom";
import {toNumUSD} from "../utils";

const Product = ({product, currency}) => {
    const usd = toNumUSD(currency)
    if(product) return (
            <div className='product'>
                <Link to={'/product/'+ product._id}>
                    <img className='medium' src={product.image} alt={product.name}/>
                </Link>
                <div className='product-body'>
                    <Link to={'/product/'}>
                        <h2>{product.shotName}</h2>
                    </Link>
                    <Rating rating={product.rating}/>
                    <div className='price'>
                        <p>{usd*product.price} грн.</p>
                    </div>
                </div>

            </div>
        )
}
export default Product;