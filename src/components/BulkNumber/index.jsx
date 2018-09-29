import React from 'react';
import PropTypes from 'prop-types';
import './bulkNumber.scss';

const BulkNumber = ({ title, count }) => (
  <div className="bulk-number">
    <div className="bulk-number-count">{count}</div>
    <div className="bulk-number-title">{title}</div>
  </div>
);

BulkNumber.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default BulkNumber;