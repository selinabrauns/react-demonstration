import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconName }) => (
  <i className="material-icons">{iconName}</i>
);

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;