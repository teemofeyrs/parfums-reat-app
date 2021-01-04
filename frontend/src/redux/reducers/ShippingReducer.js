import * as axios from "axios";
/*var*/
const SET_CITIES = 'SET_CITIES';
const SET_BRANCHES = 'SET_BRANCHES';
const SET_BRANCHES_REQUEST = 'SET_BRANCHES_REQUEST';
const SET_BRANCHES_FAIL = 'SET_BRANCHES_FAIL';
const SET_ADDRESS = 'SET_ADDRESS';

/*redux-thunk*/
export const setCities = () => async (dispatch, getState) => {
    const response = await axios( '/api/shipping/cities');
    const cities = response.data.map( city => ({'Description': city.Description, 'Ref': city.Ref }))
    dispatch({ type: SET_CITIES, payload: cities})
    localStorage.setItem('sities', JSON.stringify(getState().shippingAddress.cities)) ;
}
export const setBranches = (city) => async (dispatch, getState) => {
    dispatch({
        type: SET_BRANCHES_REQUEST,
    })
    try{
        const response = await axios( `/api/shipping/${city}`);
        const branches = response.data.map( branch => ({'Description': branch.Description, }))
        dispatch({ type: SET_BRANCHES, payload: branches})
        localStorage.setItem('branches', JSON.stringify(getState().shippingAddress.branches)) ;
    }catch (error) {
        dispatch({
            type: SET_BRANCHES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}
export const setAddress = (address) => async (dispatch, getState) => {
    dispatch({
        type: SET_ADDRESS, payload: address
    })
    localStorage.setItem('address', JSON.stringify(getState.shippingAddress.address));
}

/*reducer*/
const ShippingReducer = (state={address: null}, action) => {
    switch (action.type) {
        case SET_CITIES :
            return {
                cities : action.payload
            }
        case SET_BRANCHES_REQUEST:
        return {
            loading: true
        }
        case SET_BRANCHES:
            return {
                 loading: false, branches: action.payload
            }
        case SET_BRANCHES_FAIL:
            return {
                loading: false, error: action.payload
            }
        case SET_ADDRESS:
            return {
                ...state, address: action.payload
            }
        default:
            return state
    }
}
export default ShippingReducer;