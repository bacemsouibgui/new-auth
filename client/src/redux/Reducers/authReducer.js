import { REGISTER_USER, LOGIN_USER } from "../constants/ActionTypes";

// initial state
const initState={
    user:null,
    isAuth: false,
    msg: null
}

// reducer
const authReducer=(state=initState, {type,payload})=>{
    switch(type) {
        case REGISTER_USER:
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true,
                msg: payload.msg,
                ...payload
            }

            default:
                return state;
    }

}
export default authReducer;