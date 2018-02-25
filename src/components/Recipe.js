import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import RecipeDetail from './RecipeDetail';
import { loadRecipe } from '../actions/recipes';

const Recipe = ({ recipe, loading }) => (
  <main className="px4">
    <RecipeDetail recipe={recipe} loading={loading} />
  </main>
);

Recipe.propTypes = {
  recipe: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;

  return { recipe: state.recipes.find(r => r.id === parseInt(id, 10)) };
};

const mapDispatchToProps = { loadRecipe };

function componentWillMount() {
  const { id } = this.props.match.params;

  this.setState({ loading: true });

  this.props.loadRecipe(id).then(() => {
    this.setState({ loading: false });
  });
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('loading', 'setLoading', false),
  lifecycle({ componentWillMount }),
)(Recipe);
