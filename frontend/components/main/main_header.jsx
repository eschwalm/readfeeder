import React from 'react';
import { logout } from '../../actions/session_actions';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <i className="fa fa-rss-square fa-2x" aria-hidden="true"></i>

              <button onClick={logout} value="Logout"/>
          </div>
      </nav>
    </div>
    );
  }
}

export default MainHeader;
