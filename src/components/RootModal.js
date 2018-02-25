import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import UnfavoriteModal from './UnfavoriteModal';
import { hideModal } from '../actions/modals';

const MODAL_COMPONENTS = {
  UNFAVORITE_MODAL: UnfavoriteModal,
};

/* eslint no-shadow: "off" */
const RootModal = ({ modalType, modalProps, hideModal }) => {
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
    <SpecificModal
      isOpen={modalType !== null}
      onClose={hideModal}
      {...modalProps}
    />
  );
};

RootModal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  hideModal: PropTypes.func,
};

export default compose(
  connect(state => state.modals, { hideModal }),
  branch(props => !props.modalType, renderNothing),
)(RootModal);
