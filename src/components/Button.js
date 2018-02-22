import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={classNames(
      className,
      'p1 bold bg-lime black border-none pointer',
    )}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
