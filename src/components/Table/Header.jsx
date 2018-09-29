import React from 'react';

const Header = ({ header }) => (
  <div className="table-header">
    {header.map((head, idx) => (
      <div key={idx} className={`table-header-col table-header-col-${idx}`}>
        {head.title}
      </div>
    ))}
    <div className={`table-header-col table-header-col-4`}/>
  </div>
);

export default Header;