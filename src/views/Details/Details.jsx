// Modules
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// Components
import Button from 'Components/Button';
import Icon from 'Components/Icon';
import Spinner from 'Components/Spinner';
// Actions
import {getCharacters, getHouses} from '../../../store/actions/commonAction';

// Utils
import bindActionCreators from '../../../util/bindActionCreators';

// Scss
import './details.scss';

const ListElem = ({ title, content }) => (
  <div className="list-element">
    <span className="list-element-title">{title}:</span>
    <span className="list-element-content">{content}</span>
  </div>
);

class Details extends React.Component {
  componentDidMount() {
    const { houseData, match: { params: { houseId}} } = this.props;
    if (!houseData[houseId]) {
      this.props.getHouses(houseId);
    }
  }

  getId = urlString => {
    const arr = urlString.split('/');
    if (arr.length > 0) return arr[arr.length - 1];
    return '-';
  };

  renderDetails = house => {
    const { characterNames } = this.props;
    const detailElems = [
      { title: 'Name', content: house.name},
      { title: 'Region', content: house.region || '-'},
      { title: 'Seats', content: house.seats.join(', ') || '-'} ,
      { title: 'Coat of Arms', content: house.coatOfArms || '-'},
      { title: 'Titles', content: house.titles.join(', ') || '-'},
      { title: 'Words', content: house.words || '-'},
    ];

    const personElems = [
      { title: 'Current Lord', content: characterNames[this.getId(house.currentLord)] || '-'},
      { title: 'Heir', content: characterNames[this.getId(house.heir)] || '-'},
      { title: 'Sworn Members', content: house.swornMembers.map(member => characterNames[this.getId(member)]).join(', ') || '-'},
    ];
    return (
      <>
        <div className="details-body-wrapper">
          <h4>Details</h4>
          <div className="details-body-wrapper-info">
            {detailElems.map(elem => <ListElem key={elem.title} title={elem.title} content={elem.content} />)}
          </div>
        </div>
        <div className="details-body-wrapper">
          <h4>Persons</h4>
          <div className="details-body-wrapper-persons">
            <div className="details-body-wrapper-info">
              {personElems.map(elem => <ListElem key={elem.title} title={elem.title} content={elem.content} />)}
            </div>
          </div>
        </div>
    </>
    )

  };

  render() {
    const { houseData, match: { params: { houseId}}, housesLoading } = this.props;
    const house = houseData[houseId];
    return (
      <div className="details">
        <Link to="/"><Button><Icon iconName="keyboard_arrow_left"/> Back</Button></Link>
        <h3>GoT House Details  -  {house ? house.name : ''}</h3>
        <div className="details-body">
          {(() => {
            if (housesLoading) return <Spinner />;
            if (house) return this.renderDetails(house);
            else return <div className="no-details">No details available</div>;
          })()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  characterNames: state.commonReducer.characterNames,
  housesLoading: state.commonReducer.housesLoading,
  houseData: state.commonReducer.houseData,
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
  getHouses,
  getCharacters,
}, dispatch, props);

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Details);