import * as axios from "axios";
/*var*/
const SET_CITIES = 'SET_CITIES';
const SET_BRANCHES = 'SET_BRANCHES';
const SET_BRANCHES_REQUEST = 'SET_BRANCHES_REQUEST';
const SET_BRANCHES_FAIL = 'SET_BRANCHES_FAIL';
const SET_ADDRESS = 'SET_ADDRESS';

/*redux-thunk*/
export const setCities = () => async (dispatch, ) => {
    const response = await axios( '/api/shipping/cities');
    const cities = response.data.map( city => ({'Description': city.Description, 'Ref': city.Ref}))
    dispatch({ type: SET_CITIES, payload: cities})
    localStorage.setItem('sities', JSON.stringify(cities));
}
export const setBranches = (city) => async (dispatch) => {
    dispatch({
        type: SET_BRANCHES_REQUEST,
    })
    try{
        const response = await axios( `/api/shipping/${city}`);
        const branches = response.data.map( branch => ({'Description': branch.Description, 'Ref': branch.Ref}))
        dispatch({ type: SET_BRANCHES, payload: branches})
        localStorage.setItem('branches', JSON.stringify(branches)) ;
    }catch (error) {
        dispatch({
            type: SET_BRANCHES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}
export const saveAddress = (address) => async (dispatch) => {
    dispatch({
        type: SET_ADDRESS, payload: address
    })
    localStorage.setItem('address', JSON.stringify(address));
}

/*reducer*/
const ShippingReducer = (state={address : {}}, action) => {
    switch (action.type) {
        case SET_CITIES :
            return {
                ...state,
                cities : action.payload
            }
        case SET_BRANCHES_REQUEST:
        return {
            ...state,
            loading: true
        }
        case SET_BRANCHES:
            return {
                ...state, loading: false, branches: action.payload
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