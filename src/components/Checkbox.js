/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose, withState, withHandlers } from 'recompose';

const Checkbox = ({ animationActive, active, onClick }) => (
  <div
    role="button"
    onClick={onClick}
    className={classNames('inline-block animated', {
      bounceIn: animationActive,
    })}
  >
    {active ? '✅' : '⬜️'}
  </div>
);

Checkbox.propTypes = {
  active: PropTypes.bool,
  animationActive: PropTypes.bool,
  onClick: PropTypes.func,
};

const onClick = props => e => {
  props.setAnimationActive(true);

  setTimeout(() => {
    props.setAnimationActive(false);
  }, 250);

  props.onClick(e);
};

export default compose(
  withState('animationActive', 'setAnimationActive', false),
  withHandlers({ onClick }),
)(Checkbox);
