import React from 'react';
import ReactDOM from 'react-dom';

import { Route, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    margin                : '0 auto'
  }
};

class SessionModal extends React.Component {
  constructor() {
    super();

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
      <div className="session-modal">
        <button onClick={this.openModal}
          className="btn btn-success navbar-btn">
          login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{title}</h2>

              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"/>
              <br/>

              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"/>
              <br/>
            <input type="submit" />
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
