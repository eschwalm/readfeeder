import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-navbar">
        <nav className="nav navbar-inverse navbar-fixed-bottom">
          <div className="footer-icons">
            <a
              style={{fontSize: "18px", color: "#ccc"}}
              href="https://github.com/eschwalm">
              <i
                className="fa fa-github fa-2x"
                aria-hidden="true"
                >

              </i>
            </a>

            <a

              style={{fontSize: "18px", color: "#ccc"}}
              href="www.linkedin.com/in/evan-schwalm-999701143">
              <i
                className="fa fa-linkedin-square fa-2x"
                aria-hidden="true"
                ></i>
            </a>
          </div>

        </nav>
      </div>
    );
  }
}

export default Footer;
