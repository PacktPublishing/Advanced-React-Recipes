import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { loadRecipe } from '../actions/recipes';
import { toggleFavorite } from '../actions/favorites';

const Home = ({
  recipes,
  favorites,
  currentRecipe,
  onRecipeClick,
  onToggleFavorite,
}) => (
  <main className="px4 flex">
    <div style={{ flex: 2 }}>
      <h2 className="h2">Recipes</h2>
      <RecipeList
        recipes={recipes}
        favorites={favorites}
        onClick={onRecipeClick}
        onFavorited={onToggleFavorite}
      />
    </div>
    <RecipeDetail className="ml4" recipe={currentRecipe} style={{ flex: 3 }} />
  </main>
);

Home.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  currentRecipe: PropTypes.object,
  onRecipeClick: PropTypes.func,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = { onToggleFavorite: toggleFavorite, loadRecipe };

const onRecipeClick = props => id => {
  props.loadRecipe(id).then(action => {
    props.setCurrentRecipe(action.data);
  });
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('currentRecipe', 'setCurrentRecipe', null),
  withHandlers({ onRecipeClick }),
)(Home);
