import React from 'react';

const Cell = ({ children, idx }) => (
  <div className={`table-cell table-cell-col-${idx}`}>{children}</div>
);

export default Cell;