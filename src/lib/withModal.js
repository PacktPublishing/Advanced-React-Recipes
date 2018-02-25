/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { showModal } from '../actions/modals';

const withModal = (modalType, callbackName) => WrappedComponent => props => {
  const callback = {
    [callbackName]: props.showModal.bind(null, modalType),
  };

  return <WrappedComponent {...props} {...callback} />;
};

export default (modalType, callbackName) =>
  compose(connect(null, { showModal }), withModal(modalType, callbackName));
