import { combineReducers } from 'redux';
import testReducer from './test';

// Start creating one reducer, and then jump into combining them
export const makeRootReducer = () =>
  combineReducers({
    test: testReducer,
  });

export default { makeRootReducer };
