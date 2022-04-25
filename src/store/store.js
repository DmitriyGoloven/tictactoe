import {createStore} from 'redux';
import boardReducer from './boardReducer/reducer'
import playerReducer from './playerReducer/reducer'
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    boardReducer,
    playerReducer,
})

const store = createStore(rootReducer);

export default store;