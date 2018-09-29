import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, idx }) => (
  <div className={`table-row table-row-${idx}`}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Row;