import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  render() {
    let title = (this.props.formType === "login") ? "Login" : "Sign Up";
    return (
      <div>
        <h3>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}/>
          </label>
          <br/>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
