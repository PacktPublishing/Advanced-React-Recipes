import React from 'react';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { recipes, currentRecipe } = this.state;

    return (
      <main className="px4 flex">
        <RecipeList
          recipes={recipes}
          onClick={this.onRecipeClick}
          style={{ flex: 2 }}
        />
        <Recipe className="ml4" recipe={currentRecipe} style={{ flex: 3 }} />
      </main>
    );
  }
}

export default Home;
