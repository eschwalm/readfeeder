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
    width                      : '25%',
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
    padding                    : '20px',
    justifyContent            : 'space-around'

  }
};

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      username: "",
      password: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let title = (this.props.formType === "login") ? "Login" : "Sign Up";

    return (
      <div>
        <button onClick={this.openModal}
          className="btn btn-success navbar-btn navbar-right">
          {title}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{title}</h2>

              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="session-input"/>

              <br/>

              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="session-input"/>
              <br/>
            <input className="btn btn-success btn-xs" type="submit" />

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
