import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import { showModal } from '../actions/modals';
import { toggleFavorite } from '../actions/favorites';

const Favorites = ({ recipes, favorites, onToggleFavorite }) => (
  <main className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={recipes.filter(r => favorites.includes(r.id))}
      favorites={favorites}
      onFavorited={onToggleFavorite}
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

const mapDispatchToProps = dispatch => ({
  onToggleFavorite: recipeId => {
    const message = 'Are you sure you want to unfavorite this recipe?';
    const onSubmit = () => dispatch(toggleFavorite(recipeId));

    dispatch(showModal('CONFIRM_MODAL', { message, onSubmit }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
