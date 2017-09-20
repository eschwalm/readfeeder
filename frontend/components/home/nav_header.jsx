import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class NavHeader extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <h6>Welcome To Readfeeder</h6>
              <SessionFormContainer formType="login"/>
          </div>
      </nav>
    </div>
    );
  }
}

export default NavHeader;
