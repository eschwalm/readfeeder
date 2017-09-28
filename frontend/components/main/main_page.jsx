import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import MainHeaderContainer from './main_header_container';
import SidebarNav from './sidebar_nav';
import FeedIndexContainer from '../feeds/feed_index_container';
import FeedShowContainer from '../feeds/feed_show_container';
import CollectionIndexContainer
  from '../collections/collections_index_container';
import CollectionShowContainer from '../collections/collection_show_container';
import { collectionFeed } from '../../selectors/collection_selectors';

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

              <Route
                exact path="/i/collections"
                component={CollectionIndexContainer} />
              <Route
                exact path="/i/collections/:category"
                component={CollectionShowContainer} />
              <Route path="/i/feeds/:source" component={FeedShowContainer}/>
              <Route path="/i/discover/sources" component={FeedIndexContainer}/>
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(MainPage);
