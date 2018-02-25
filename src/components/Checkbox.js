/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends React.Component {
  state = { animationActive: false };

  onClick = e => {
    this.setState({ animationActive: true });

    setTimeout(() => {
      this.setState({ animationActive: false });
    }, 250);

    this.props.onClick(e);
  };

  render() {
    const { active } = this.props;
    const { animationActive } = this.state;

    return (
      <div
        role="button"
        onClick={this.onClick}
        className={classNames('inline-block animated', {
          bounceIn: animationActive,
        })}
      >
        {active ? '✅' : '⬜️'}
      </div>
    );
  }
}

Checkbox.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
