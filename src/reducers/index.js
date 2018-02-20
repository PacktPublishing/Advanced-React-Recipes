import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import favoritesReducer from './favorites';

// Start creating one reducer, and then jump into combining them
export const makeRootReducer = () =>
  combineReducers({
    recipes: recipesReducer,
    favorites: favoritesReducer,
  });

export default { makeRootReducer };
