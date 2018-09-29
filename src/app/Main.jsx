// Modules
import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';

// Views
import Details from 'Views/Details';
import Home from 'Views/Home';

// Components
import Toolbar from 'Components/Toolbar'

import './main.scss';

const menuItems = [{
  link: '/',
  iconName: 'home'
}];

const Main = () => {
  return (
    <div className="main">
      <Toolbar menuItems={menuItems} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  )
};

export default Main;