import React from 'react';

import MainHeaderContainer from './main_header_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainHeaderContainer />
      </div>
    );
  }
}

export default MainPage;
