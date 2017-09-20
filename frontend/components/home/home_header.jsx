import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  render() {
    return (
        <nav className="nav navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3>Welcome To Readfeeder</h3>
              <SessionFormContainer />
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
