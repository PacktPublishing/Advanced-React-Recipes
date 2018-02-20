import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
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

const mapStateToProps = state => ({ favorites: state.favorites });

const mapDispatchToProps = { onToggleFavorite: toggleFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
