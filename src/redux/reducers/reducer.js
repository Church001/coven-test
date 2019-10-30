import { CLICKED_AIRPORT, CLOSE_MODAL, FETCH_AIRLINES, IS_FETCHING } from "../Constants";

const initialState = {
    isFetching: false,
    airport: null,
    airlines:[],
    isDone: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CLICKED_AIRPORT:
            return{
                ...state,
                airport: action.payload
            }
        case FETCH_AIRLINES:
            return {
                ...state,
                airlines: action.payload,
                isDone: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                airport: null
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state;
    }
}
