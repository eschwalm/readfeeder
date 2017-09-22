import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import MainHeaderContainer from './main_header_container';
import SidebarNav from './sidebar_nav';
import FeedIndexContainer from '../feeds/feed_index_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SidebarNav />
        <div id="main">
          <MainHeaderContainer />
          <div className="main-content">
            <Switch>

              <Route path="/i/discover/sources" component={FeedIndexContainer}/>
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(MainPage);
