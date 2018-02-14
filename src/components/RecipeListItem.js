/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ recipe, favorited, onClick, onFavorited }) => (
  <li
    key={recipe.id}
    onClick={() => onClick(recipe.id)}
    className="py2 border-bottom border-bottom-dashed pointer"
  >
    <span
      role="button"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
    >
      {favorited ? '✅' : '⬜️'}
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

RecipeListItem.defaultProps = {
  recipe: {},
  onClick: () => {},
  onFavorited: () => {},
};

export default RecipeListItem;
