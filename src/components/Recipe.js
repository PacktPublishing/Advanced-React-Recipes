import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe, className, style }) => {
  if (!recipe) {
    return (
      <p className={className} style={style}>No recipe selected.</p>
    );
  }

  return (
    <div className={className} style={style}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories} cal</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map(step => (
          <li>{step}</li>
        ))}
      </ol>
    </div>
  );
};

Recipe.PropTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Recipe;
