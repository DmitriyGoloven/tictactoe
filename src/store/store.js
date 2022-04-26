import {createStore} from 'redux';
import reducer from "./playerReducer/reducer";

const store = createStore(reducer);

export default store;