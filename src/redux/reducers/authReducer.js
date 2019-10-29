import { LOGIN, LOGOUT } from "../Constants";

const initialState = {
    isAuthenticated: true
    
}

export const authReducer = ( state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}