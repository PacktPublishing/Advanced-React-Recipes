import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RecipeList from '../components/RecipeList';
import withModal from '../lib/withModal';

const Favorites = ({ recipes, favorites, onToggleFavorite }) => (
  <main className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={recipes.filter(r => favorites.includes(r.id))}
      favorites={favorites}
      onFavorited={recipeId => onToggleFavorite({ recipeId })}
    />
  </main>
);

Favorites.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

export default compose(
  connect(mapStateToProps),
  withModal('UNFAVORITE_MODAL', 'onToggleFavorite'),
)(Favorites);
