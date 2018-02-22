import { actionTypes } from '../actions/recipes';

const initialState = [];

const mergeById = (src, dst) =>
  src.concat(dst).reduce((acc, element) => {
    const idx = acc.findIndex(d => d.id === element.id);

    if (idx !== -1) {
      return acc
        .slice(0, idx)
        .concat({ ...acc[idx], ...element })
        .concat(acc.slice(idx + 1));
    }

    return [...acc, element];
  }, []);

const ACTION_HANDLERS = {
  [`${actionTypes.LOAD_RECIPE}_SUCCESS`]: (state, action) =>
    mergeById(state, [action.data]),
  [`${actionTypes.LOAD_RECIPES}_SUCCESS`]: (state, action) =>
    mergeById(state, action.data),
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
