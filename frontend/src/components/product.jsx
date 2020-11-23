import React from 'react';
import Rating from "./Rating";

const Product = ({product}) => {
    if(product) return (
            <div className='product'>
                <a href={'/product/'+ product._id}>
                    <img className='medium' src={product.image} alt={product.name}/>
                </a>
                <div className='product-body'>
                    <a href={'/product/'}>
                        <h2>{product.shotName}</h2>
                    </a>
                    <Rating rating={product.rating}/>
                    <div className='price'>
                        <p>$ {product.price}</p>
                    </div>
                </div>

            </div>
        )
}
export default Product;