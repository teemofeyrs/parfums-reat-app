import * as Axios from "axios";
import {USER_SING_IN_SUCCESS} from "./SingInReducer";
/* constants */

const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

/* thunk */
export const register = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST , payload: {name,email, password}
    })
    try{
        const {data} = await Axios.post( '/api/users/register', {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS , payload: data});
        dispatch({type: USER_SING_IN_SUCCESS , payload: data});
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(e) {
        dispatch(
            {type: USER_REGISTER_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message,}
        )
    }
}


/* reducer */
const RegisterReducer = (state= {userInfo: null}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: return {
            loading: true
        }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false, userInfo: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                userInfo: null,
                loading: false, error: action.payload
            }
        default: return state
    }
}


export default RegisterReducer;
