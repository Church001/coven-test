import { TEST_CONSTANT } from "../Constants";

const initialState = {
    test: 'TEST'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CONSTANT:
            return{
                ...state,
                test: 'ADDED MORE TEST'
            }
        default:
            return state;
    }
}
