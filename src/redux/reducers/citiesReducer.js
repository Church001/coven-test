import { majorCities } from "../../utils/Data";
import { GET_CITIES } from "../Constants";

const initialState = majorCities

export const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CITIES:
            return {
                ...state
            }
        default:
            return state
    }
}