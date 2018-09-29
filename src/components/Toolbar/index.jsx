import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'Components/Icon';
import PropTypes from 'prop-types';

import './toolbar.scss';

const Toolbar = ({ menuItems }) => (
  <div className="toolbar">
    {menuItems.map(item => <NavLink key={item.iconName} activeClassName="active" to={item.link}><Icon iconName={item.iconName} /></NavLink>)}
  </div>
);

Toolbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    iconName: PropTypes.string,
  }))
};

export default Toolbar;