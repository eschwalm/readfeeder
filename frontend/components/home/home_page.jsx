import React from 'react';

import NavHeader from './nav_header';
import Welcome from './welcome';
import Footer from './footer';
import Features from './features';


class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <header className="home-header">
          <NavHeader />
        </header>
        <div className="home-body">
          <Welcome />
          <br/> <br/>
          <img
            src="http://res.cloudinary.com/dhuab49yi/image/upload/v1506717546/readfeeder_img.png"/>
        </div>
      <Features />
      <Footer />
      </div>
    );
  }
}

export default HomePage;
