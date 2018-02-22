export const actionTypes = {
  LOAD_RECIPES_SUCCESS: 'LOAD_RECIPES_SUCCESS',
  LOAD_RECIPES_FAILURE: 'LOAD_RECIPES_FAILURE',
  LOAD_RECIPE_SUCCESS: 'LOAD_RECIPE_SUCCESS',
  LOAD_RECIPE_FAILURE: 'LOAD_RECIPE_FAILURE',
};

export const loadRecipes = () => dispatch =>
  fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes =>
      dispatch({ type: actionTypes.LOAD_RECIPES_SUCCESS, recipes }),
    )
    .catch(error =>
      dispatch({ type: actionTypes.LOAD_RECIPES_FAILURE, error }),
    );

export const loadRecipe = id => dispatch =>
  fetch(`${API_URL}/v1/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => dispatch({ type: actionTypes.LOAD_RECIPE_SUCCESS, recipe }))
    .catch(error => dispatch({ type: actionTypes.LOAD_RECIPE_FAILURE, error }));

export const actions = {
  loadRecipes,
};
