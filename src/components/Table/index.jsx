import React from 'react';
import PropTypes from 'prop-types';


import Row from './Row';
import Cell from './Cell';
import Header from './Header';

import './table.scss';

export const Table = ({ children }) => (
  <div className="table">{children}</div>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  Table,
  Header,
  Row,
  Cell
}