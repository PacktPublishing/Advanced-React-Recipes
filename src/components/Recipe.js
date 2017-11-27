import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
      loading: false,
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    this.setState({ loading: true });

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe, loading: false });
      });
  }

  render() {
    const { recipe, loading } = this.state;

    return (
      <main className="px4">
        <RecipeDetail recipe={recipe} loading={loading} />
      </main>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};

export default Recipe;
