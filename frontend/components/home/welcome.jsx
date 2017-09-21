import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Welcome extends React.Component {
  render() {
    return (
      <div className="home-welcome">
        <h1>Welcome to Readfeeder</h1><br/>
        <p>The content you need to accelerate your
          research, marketing, and sales</p><br/>

        <div className="welcome-button">
          <SessionFormContainer formType="signup" />
        </div>
        <div className="welcome-button">
          <SessionFormContainer formType="login" demo="true" />
        </div>
      </div>
    );
  }
}

export default Welcome;
