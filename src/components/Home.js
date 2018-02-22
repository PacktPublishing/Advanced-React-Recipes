import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { loadRecipe } from '../actions/recipes';
import { toggleFavorite } from '../actions/favorites';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    this.props.loadRecipe(id).then(action => {
      this.setState({ currentRecipe: action.data });
    });
  };

  render() {
    const { recipes, onToggleFavorite, favorites } = this.props;
    const { currentRecipe } = this.state;

    return (
      <main className="px4 flex">
        <div style={{ flex: 2 }}>
          <h2 className="h2">Recipes</h2>
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            onFavorited={onToggleFavorite}
          />
        </div>
        <RecipeDetail
          className="ml4"
          recipe={currentRecipe}
          style={{ flex: 3 }}
        />
      </main>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  loadRecipe: PropTypes.func,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = { onToggleFavorite: toggleFavorite, loadRecipe };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
