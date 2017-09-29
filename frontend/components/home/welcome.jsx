import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Welcome extends React.Component {
  render() {
    return (
      <div className="home-welcome">
        <h1>Welcome to Readfeeder</h1><br/>
        <p>Get the latest headlines from all of your sources, in one feed.</p><br/>

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
