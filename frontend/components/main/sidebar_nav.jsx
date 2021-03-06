import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import CollectionsIndexContainer
from '../collections/collections_index_container';

class SidebarNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      content: "sidenav-content"
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  toggleNav() {
    if (this.state.isOpen) {
      document.getElementById("sidenav").style.width = "60px";
      document.getElementById("main").style.marginLeft = "60px";
      this.setState({isOpen: false, content: "sidenav-content hidden"});
    }
    else {
      document.getElementById("sidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      this.setState({isOpen: true, content: "sidenav-content"});
    }
  }

  toggleBtn() {
    return (this.state.isOpen) ? "fa fa-minus" : "fa fa-bars";
  }


  render() {
    return (
      <div id="sidenav" className="sidenav">

          <button className="sidenav-toggle-btn" onClick={this.toggleNav}>
            <i className={this.toggleBtn()} aria-hidden="true"></i>
            </button>

            <div className={this.state.content}>
              <div className="static-content">
              <NavLink to='/i/discover'>
                <i className="fa fa-rss" aria-hidden="true"></i>
                  Discover
                </NavLink>
                <NavLink to="/i/saved">
                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    Read Later
                  </NavLink>
                  <div className="separator"></div>


                    <div className="container">
                      <label>FEEDS</label>

                        <NavLink
                          to="/i/collections"
                          className="collection-settings"
                          style={{
                            color: "inherit",
                            background: "none"}}>
                            <i
                              className="fa fa-cog"
                              aria-hidden="true"></i>
                            </NavLink>
                          </div>
                          <NavLink
                            to="/i/all"
                            className="feed-li-item">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                              All
                            </NavLink>
                          </div>

                          <div className="collections">

                              <CollectionsIndexContainer />

                                <NavLink to="/i/discover/sources" className="add-content-btn">
                                  <i className="fa fa-plus" aria-hidden="true"></i>
                                    ADD CONTENT
                                  </NavLink>

                          </div>

                        </div>

      </div>
    );
  }
}

export default withRouter(SidebarNav);
