import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import MainHeaderContainer from './main_header_container';
import SidebarNav from './sidebar_nav';
import FeedIndexContainer from '../feeds/feed_index_container';
import FeedShowContainer from '../feeds/feed_show_container';
import CollectionIndexContainer
  from '../collections/collections_index_container';
import CollectionShowContainer from '../collections/collection_show_container';
import SavedArticlesContainer from '../articles/saved_articles_container';
import EditCollectionsContainer
  from '../collections/edit_collections_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <SidebarNav />
        <div id="main">
          <MainHeaderContainer />

          <div className="main-content">
            <Switch>

              <Route path="/i/saved" component={SavedArticlesContainer} />
              <Route
                exact path="/i/collections"
                component={EditCollectionsContainer} />
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
