import * as Axios from "axios";
/* constants */
const USER_SING_IN_REQUEST = 'USER_SING_IN_REQUEST';
export const USER_SING_IN_SUCCESS = 'USER_SING_IN_SUCCESS';
const USER_SING_IN_FAIL = 'USER_SING_IN_FAIL';
const USER_LOG_OUT = 'USER_LOG_OUT';


/* thunk */
export const singIn = (email,password) => async (dispatch) => {
    dispatch({
        type: USER_SING_IN_REQUEST , payload: {email, password}
    })
    try{
        const {data} = await Axios.post( '/api/users/singin', {email, password});
        dispatch({type: USER_SING_IN_SUCCESS , payload: data})
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(e) {
        dispatch(
            {type: USER_SING_IN_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message,}
        )
    }
}
export const singOut = () => (dispatch,getState) => {
   dispatch({
       type: USER_LOG_OUT
   })
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
}


/* reducer */

const SingInReducer = (state= {userInfo: {}}, action) => {
switch (action.type) {
    case USER_SING_IN_REQUEST: return {
        loading: true
    }
    case USER_SING_IN_SUCCESS:
        return {
            loading: false, userInfo: action.payload
        }
    case USER_SING_IN_FAIL:
        return {
            userInfo: null,
            loading: false, error: action.payload
        }
    case USER_LOG_OUT:
        return {

        }
    default: return state
}
}
export default SingInReducer;
