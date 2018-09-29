import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ children, idx }) => (
  <div className={`table-cell table-cell-col-${idx}`}>{children}</div>
);

Cell.propTypes = {
  children: PropTypes.node,
  idx: PropTypes.number.isRequired,
};

export default Cell;