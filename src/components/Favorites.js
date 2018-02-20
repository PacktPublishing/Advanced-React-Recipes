import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';

const Favorites = ({ recipes, favorites, toggleFavorite }) => (
  <main className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={recipes.filter(r => favorites.includes(r.id))}
      favorites={favorites}
      onFavorited={toggleFavorite}
    />
  </main>
);

Favorites.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(mapStateToProps)(Favorites);
