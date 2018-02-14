import { createStore } from 'redux';
import { makeRootReducer } from '../reducers';

// Store Instantiation and HMR Setup
const store = createStore(makeRootReducer());

export default store;
