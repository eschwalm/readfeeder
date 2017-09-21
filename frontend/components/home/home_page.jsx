import React from 'react';

import NavHeader from './nav_header';
import Welcome from './welcome';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <header className="home-header">
          <NavHeader />
        </header>
        <body className="home-body">
          <Welcome />
          <br/> <br/>
          <img
            src="https://s3.feedly.com/production/head/images/landing/screenshot-web@2x.png"/>
        </body>
      </div>
    );
  }
}

export default HomePage;
