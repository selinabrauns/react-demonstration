import React from 'react';
import Row from './Row';
import Cell from './Cell';
import Header from './Header';

import './table.scss';

export const Table = ({ children }) => (
  <div className="table">{children}</div>
);

export default {
  Table,
  Header,
  Row,
  Cell
}