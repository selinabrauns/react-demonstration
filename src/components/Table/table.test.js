import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';
import Header from './Header';

const props = {
  header: [{ title: 'test'}, { title: 'test2'} ]
};
let wrapper;

describe('Table Header', () => {
  beforeEach(() => {
    wrapper = shallow( <Header header={props.header} /> );
  });

  test(`has ${props.header.length} columns`, () => {
    expect(wrapper.children()).toHaveLength(3);
  })
});