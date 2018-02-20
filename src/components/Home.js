import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { recipes, toggleFavorite, favorites } = this.props;
    const { currentRecipe } = this.state;

    return (
      <main className="px4 flex">
        <div style={{ flex: 2 }}>
          <h2 className="h2">Recipes</h2>
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            onFavorited={toggleFavorite}
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
  toggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(mapStateToProps)(Home);
