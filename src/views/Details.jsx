import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Icon from '../components/Icon';

const Project = ({ match }) => {
  return <div>
    Project
    {match.params.houseId}
  </div>
}

class Details extends React.Component {
  render() {
    return (
      <div className="details">
        Details
        <Route path="/details/:houseId" component={Project} />
      </div>
    )
  }
}

export default withRouter(Details);