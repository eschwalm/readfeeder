import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Welcome extends React.Component {
  render() {
    return (
      <div className="home-welcome">
        <h4>Welcome to Readfeeder</h4>
        <p>The content you need to accelerate your
          research, marketing, and sales</p>
        <SessionFormContainer formType="signup" />
      </div>
    );
  }
}

export default Welcome;
