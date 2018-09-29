import React from 'react';
import './button.scss';

const Button = ({ onClick, children, primary }) => (
  <button className={`button ${primary ? 'primary' : ''}`} onClick={onClick && onClick}>
    {children}
  </button>
);

export default Button;