import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ConfirmModal = ({ message, onClose, onSubmit }) => (
  <div className="flex items-center justify-center absolute t0 l0 bg-black-muted full-width full-height">
    <div className="p2 center bg-white rounded max-width-2">
      <h2>{message}</h2>
      <Button className="mr2" onClick={onClose}>
        Cancel
      </Button>
      <Button
        onClick={() => {
          onSubmit();
          onClose();
        }}
      >
        OK
      </Button>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ConfirmModal;
