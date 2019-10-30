import { combineReducers} from 'redux';
import { reducer } from './reducer';
import { authReducer } from './authReducer';
import { citiesReducer } from './citiesReducer';

const rootReducer = combineReducers({
    reducer: reducer,
    auth: authReducer,
    cities: citiesReducer
})

export default rootReducer;