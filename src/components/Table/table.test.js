import React from 'react';
import { shallow } from 'enzyme';
import { Table } from './index';
import Header from './Header';
import Row from './Row';
import Cell from './Cell';

const props = {
  header: [{ title: 'Test', tableKey: 'test' }, { title: 'Test2', tableKey: 'test2' } ],
  childContent: <div>Test</div>,
  tableData: [{ 'test': 'test value'}, { 'test2': 'test value 2' }],
  index: 1,
};
let wrapper;


describe('Table Header', () => {
  const headerWrapper = shallow( <Header header={props.header} /> );

  test(`has ${props.header.length} columns`, () => {
    expect(headerWrapper.children()).toHaveLength(props.header.length);
  });
});

describe('Table Row', () => {
  const rowWrapper = shallow( <Row idx={props.index}>{props.childContent}</Row> );

  test(`contains div element`, () => {
    expect(rowWrapper.containsMatchingElement(props.childContent)).toBeTruthy();
  });

  test(`shows 'Test'`, () => {
    expect(rowWrapper.text()).toBe('Test');
  });
});

describe('Table Cell', () => {
  const cellWrapper = shallow( <Cell idx={props.index}>{props.childContent}</Cell> );

  test(`contains div element`, () => {
    expect(cellWrapper.containsMatchingElement(props.childContent)).toBeTruthy();
  });

  test(`shows 'Test'`, () => {
    expect(cellWrapper.text()).toBe('Test');
  });
});

describe('Table', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Table>
        <Header header={props.header} />
        <Row idx={0}>
          {props.header.map((head, idx) => (
            <Cell key={idx} idx={idx}>
              {props.tableData[head.tableKey]}
            </Cell>
          ))}
        </Row>
      </Table> );
  });

  test(`has header`, () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  test(`has ${props.header.length} columns`, () => {
    expect(wrapper.find(Header).dive().children().length).toBe(props.header.length);
    expect(wrapper.find(Row).children().length).toBe(props.header.length);
  });
});