import React, {useEffect} from 'react';
import Product from "../components/product";
import LoadingBox from "../components/LoadindBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {getCurrency, listProduct} from "../redux/reducers/productReducer";

const ProductScreen = (props) => {
    const productsList = useSelector((state) => state.productsList);
    let {loading, parfums, error, usd} = productsList;
    if(!usd){
        usd = {rate: 28.4}
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrency())
        dispatch(listProduct())
    }, [])
    // eslint-disable-next-line array-callback-return
    return (
        <>
            {loading ? <LoadingBox/> : error ? <MessageBox variant='danger'>{error}</MessageBox> :
                <div className='row center'>
                    {parfums.map((product) => {
                        return (<Product key={product._id} product={product} currency={usd.rate}/>)
                    })}</div>
            }
        </>
    );
}

export default ProductScreen;