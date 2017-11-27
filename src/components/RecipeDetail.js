import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const RecipeDetail = ({ recipe, loading, className, style }) => {
  if (loading) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        Loading recipe...
      </p>
    );
  }

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
        <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
        <Link
          className="right-align"
          to={`/recipe/${recipe.id}`}
          href={`/recipe/${recipe.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  loading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeDetail;
