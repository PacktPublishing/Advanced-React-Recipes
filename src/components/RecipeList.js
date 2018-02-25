import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, favorites, className, style, ...props }) => (
  <div className={className} style={style}>
    <ul className="list-reset">
      <CSSTransitionGroup
        transitionName="slideOutRight"
        transitionLeaveTimeout={300}
        transitionEnter={false}
      >
        {recipes.map(recipe => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            favorited={favorites.includes(recipe.id)}
            {...props}
          />
        ))}
      </CSSTransitionGroup>
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

export default RecipeList;
