import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ onClick, children, primary }) => (
  <button className={`button ${primary ? 'primary' : ''}`} onClick={onClick && onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
};

export default Button;