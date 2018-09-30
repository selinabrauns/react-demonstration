import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ header }) => (
  <div className="table-header">
    {header.map((head, idx) => (
      <div key={idx} className={`table-header-col table-header-col-${idx}`}>
        {head.title}
      </div>
    ))}
    <div className={`table-header-col table-header-col-${header.length}`} />
  </div>
);

Header.propTypes = {
  header: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.name })).isRequired
};

export default Header;