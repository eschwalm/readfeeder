import React from 'react';

class FollowDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn-sm btn-outline-success dropdown-toggle"
          type="button"
          data-toggle="dropdown">
          Follow
        <span className="caret"></span></button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li className="dropdown-divider"></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div>
    );
  }
}

export default FollowDropdown;
