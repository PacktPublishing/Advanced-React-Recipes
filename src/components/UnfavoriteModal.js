import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmModal from './ConfirmModal';
import { toggleFavorite } from '../actions/favorites';

const UnfavoriteModal = ({ onClose, onSubmit }) => (
  <ConfirmModal
    message="Are you sure you want to unfavorite this recipe?"
    onClose={onClose}
    onSubmit={onSubmit}
  />
);

UnfavoriteModal.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => dispatch(toggleFavorite(ownProps.recipeId)),
});

export default connect(null, mapDispatchToProps)(UnfavoriteModal);
