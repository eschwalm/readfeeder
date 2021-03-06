import React from 'react';
import ReactDOM from 'react-dom';

import { Route, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    margin                     : '0 auto',
    textAlign                  : 'center',
    maxBlockSize               : 'max-content',
    maxInlineSize              : 'max-content',
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #333333',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '25px'

  }
};

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      modalIsOpen: false,
      username: "",
      password: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = this.title.bind(this);
    this.buttonType = this.buttonType.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors});
  }

  displayErrors() {
    return (
      <div>
        <ul className="session-errors">
          {this.state.errors.map( (error, i) => (
            <li
              key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      errors: [],
      username: "",
      password: ""
    });
  }

  handleDemo() {
    this.props.submitForm({
      username: "Readfeeder_demo",
      password: "demo_pass123",
      errors: []
    });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  title() {
    if (this.props.demo === "true") {
      return "Demo";
    }
    return (this.props.formType === "login") ? "Login" : "Sign Up";
  }

  buttonType() {
    if (this.props.demo === "true") {
      return "btn btn-primary navbar-btn navbar-right";
    }
    return "btn btn-success navbar-btn navbar-right";
  }

  render() {

    return (
      <div>
        <button onClick={
            (this.props.demo === "true") ? this.handleDemo : this.openModal}
          className={this.buttonType()}>
          {this.title()}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal"
        >

          <h2>{this.title()}</h2>

          <div
            ref={subtitle => this.subtitle = subtitle}>
              {this.displayErrors()}
          </div>

            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="session-input"/>


            <br/>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="session-input"/>
            <br/>


          <input
            className="btn btn-success"
            type="submit"
            onClick={this.handleSubmit}/>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
