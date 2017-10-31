/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, onClick, className, style }) => (
  <div className={className} style={style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          onClick={() => onClick(recipe.id)}
          className="py2 border-bottom border-bottom-dashed pointer"
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeList;
