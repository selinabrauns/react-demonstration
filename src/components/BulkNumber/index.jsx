import React from 'react';
import './bulkNumber.scss';

const BulkNumber = ({ title, count }) => (
  <div className="bulk-number">
    <div className="bulk-number-count">{count}</div>
    <div className="bulk-number-title">{title}</div>
  </div>
);

export default BulkNumber;