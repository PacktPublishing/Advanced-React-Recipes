export const actionTypes = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

export const toggleFavorite = id => ({
  type: actionTypes.TOGGLE_FAVORITE,
  id,
});

export const actions = {
  toggleFavorite,
};
