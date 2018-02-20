import { actionTypes } from '../actions/favorites';

const initialState = [];

const ACTION_HANDLERS = {
  [actionTypes.TOGGLE_FAVORITE]: (state, action) => {
    const idx = state.indexOf(action.id);

    if (idx !== -1) {
      return state.filter(f => f !== action.id);
    }
    return [...state, action.id];
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
