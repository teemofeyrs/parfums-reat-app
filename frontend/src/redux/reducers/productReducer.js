import * as axios from "axios";
/*constants*/

const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

/*actions*/
export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    })
    try{
        const {data} = await axios.get('/api/products');
        debugger
        dispatch({
            type: PRODUCT_LIST_SUCCESS, payload: data
        })
    } catch(e){
        dispatch({
            type: PRODUCT_LIST_FAIL,
        })
    }
}

/*reducer*/
const productReducer = (state = {
    parfums: []
}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
        return {
            loading:true
        }
        case PRODUCT_LIST_SUCCESS:
            return {
            loading: false, parfums: action.payload
        }
        case PRODUCT_LIST_FAIL:
            return {
            loading: false, error: action.payload
        }
        default:
            return state
    }
}

export default productReducer;