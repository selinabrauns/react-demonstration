// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Table from 'Components/Table/index';
import BulkNumber from 'Components/BulkNumber/index';
import Button from 'Components/Button/index';

// Actions
import { getHouses, getCharacters } from '../../../store/actions/commonAction';

// Utils
import bindActionCreators from '../../../util/bindActionCreators';

// Scss
import './home.scss';

const tableHeader = [{
  tableKey: 'id',
  title: '#ID',
}, {
  tableKey: 'name',
  title: 'Name',
}, {
  tableKey: 'region',
  title: 'Region',
}, {
  tableKey: 'currentLord',
  title: 'Lord',
}];

class Home extends React.Component {

  componentDidMount() {
    this.props.getHouses();
    this.props.getCharacters();
  }

  renderBulkInfo = () => {
    const { houses } = this.props;
    const count = houses.reduce((prev, curr) => {
      if (!!curr.currentLord){
        if (!prev.lords[curr.currentLord]) prev.lords[curr.currentLord] = 0;
        prev.lords[curr.currentLord]++;
      }

      if (!!curr.region) {
        if (!prev.regions[curr.region]) prev.regions[curr.region] = 0;
        prev.regions[curr.region]++;
      }

      return prev;
    }, { lords: {}, regions: {} });

    return <div className="bulk-numbers">
      <BulkNumber count={houses.length} title="Houses" />
      <BulkNumber count={Object.keys(count.lords).length} title="Lords" />
      <BulkNumber count={Object.keys(count.regions).length} title="Regions" />
    </div>

  };

  render() {
    const { houses, characterNames } = this.props;
    return (
      <div className="home">
        <h3>GoT Houses</h3>
        {this.renderBulkInfo()}
        <Table.Table>
          <Table.Header header={tableHeader} />
          {houses.map((house, index) => (
            <Table.Row key={index} idx={index}>
              {tableHeader.map((head, idx) => (
                <Table.Cell key={idx} idx={idx}>
                  {(() => {
                    if (head.tableKey === 'currentLord' && house[head.tableKey] !== '') return characterNames[house[head.tableKey]];
                    if (house[head.tableKey]) return house[head.tableKey];
                    else return '-'
                  })()}
                </Table.Cell>
              ))}
              <Table.Cell idx={4}>
                <Link to={`/details/${house.id}`}><Button primary>Details</Button></Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Table>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  houses: state.commonReducer.houses,
  characterNames: state.commonReducer.characterNames
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
  getHouses,
  getCharacters,
}, dispatch, props);

export default connect(mapStateToProps, mapDispatchToProps)(Home);