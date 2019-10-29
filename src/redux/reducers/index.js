import { combineReducers} from 'redux';
import { reducer } from './reducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    reducer: reducer,
    auth: authReducer
})

export default rootReducer;