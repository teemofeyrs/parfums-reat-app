import React, {useEffect, useState} from 'react';
import Product from "../components/product";
import * as axios from "axios";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {listProduct} from "../redux/reducers/productReducer";

const ProductScreen = (props) => {
    const productsList = useSelector((state) => state.productsList);
    const {loading, parfums, error} = productsList;
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(listProduct())
    }, [])
    // eslint-disable-next-line array-callback-return
    return (
        <>
            {loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> :
                <div className='row center'>
                    {parfums.map((product) => {
                        return (<Product key={product._id} product={product}/>)
                    })}</div>
            }
        </>
    );
}

export default ProductScreen;