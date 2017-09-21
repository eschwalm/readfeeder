import React from 'react';
// import { logout } from '../../actions/session_actions';

import SessionFormContainer from '../session_form/session_form_container';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const currentUser = this.props.session.username;
    return (
      <div className="navbar-header">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <i className="fa fa-rss-square fa-2x" aria-hidden="true"></i>

              <div className="user-header">
                  <h6 className="navbar-text">{currentUser}</h6>
                  <i
                    className="user-icon fa fa-user-circle-o fa-2x"
                    aria-hidden="true">
                  </i>

                  <button
                    className="btn-sm navbar-btn btn-success"
                    onClick={this.props.logout}>
                    Logout</button>

              </div>



          </div>
      </nav>
    </div>
    );
  }
}

export default MainHeader;
