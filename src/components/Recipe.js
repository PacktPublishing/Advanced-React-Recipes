import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Recipe = ({ recipe, className, style }) => {
  if (!recipe) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        No recipe selected.
      </p>
    );
  }

  return (
    <div style={style} className={classNames('p2 bg-white', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <div className="flex flex-column">
        <img alt={recipe.name} className="fit" src={recipe.image} />
        <div>
          <span>{recipe.category}</span>
          <span>{recipe.calories} cal</span>
        </div>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h3>Steps</h3>
        <ol>{recipe.steps.map(step => <li>{step}</li>)}</ol>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Recipe;
