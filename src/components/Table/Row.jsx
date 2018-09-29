import React from 'react';

const Row = ({ children, idx }) => (
  <div className={`table-row table-row-${idx}`}>{children}</div>
);

export default Row;