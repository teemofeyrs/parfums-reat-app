import React from 'react';
import data from "../data";
import Product from "../components/product";

const ProductScreen = (props) => {
    const {parfums} = data;
    // eslint-disable-next-line array-callback-return
    const products = parfums.map( (product)=>{
        return ( <Product key={product._id} product={product}/>)
    })
    return(
        <div className='row center'>
            {products}
        </div>
    );
}

export default ProductScreen;