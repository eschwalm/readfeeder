import React from 'react';

import MainHeaderContainer from './main_header_container';
import SidebarNav from './sidebar_nav';

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
        </div>
      </div>
    );
  }
}

export default MainPage;
