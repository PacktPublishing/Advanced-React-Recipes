export const actionTypes = {
  LOAD_RECIPES: 'LOAD_RECIPES',
  LOAD_RECIPE: 'LOAD_RECIPE',
};

export const loadRecipes = () => ({
  type: actionTypes.LOAD_RECIPES,
  remote: '/v1/recipes',
});

export const loadRecipe = id => ({
  type: actionTypes.LOAD_RECIPE,
  remote: `/v1/recipes/${id}`,
});

export const actions = {
  loadRecipes,
};
