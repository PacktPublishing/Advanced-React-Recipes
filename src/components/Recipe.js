import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeDetail from './RecipeDetail';
import { loadRecipe } from '../actions/recipes';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    this.setState({ loading: true });

    this.props.loadRecipe(id).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { recipe } = this.props;
    const { loading } = this.state;

    return (
      <main className="px4">
        <RecipeDetail recipe={recipe} loading={loading} />
      </main>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
  recipe: PropTypes.object,
  loadRecipe: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;

  return { recipe: state.recipes.find(r => r.id === parseInt(id, 10)) };
};

const mapDispatchToProps = { loadRecipe };

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
