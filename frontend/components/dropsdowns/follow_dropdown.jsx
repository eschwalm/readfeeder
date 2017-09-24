import React from 'react';
import CollectionsIndexContainer
  from '../collections/collections_index_container';

class FollowDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCollection(this.state);
  }

  collectionForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Collection Name
          <input onChange={this.update('title')} type='text'/>
          <input type='submit' />
        </label>
      </form>
  );
  }

  render() {
    return (
      <div className="follow-dropdown">
        <div className="dropdown">
          <button
            className="btn-sm btn-outline-success dropdown-toggle"
            type="button"
            data-toggle="dropdown">
            Follow
            <span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-menu-right">

              <li className="dropdown-divider"></li>


            </ul>
          </div>
      </div>
    );
  }
}

export default FollowDropdown;
