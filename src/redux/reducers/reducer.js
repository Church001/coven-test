import { CLICKED_AIRPORT, CLOSE_MODAL } from "../Constants";

const initialState = {
    airport: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CLICKED_AIRPORT:
            return{
                ...state,
                airport: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                airport: null
            }
        default:
            return state;
    }
}
