import { createStore } from 'redux';
import reducer from './playerReducer/reducers'

const store = createStore(reducer);

export default store;