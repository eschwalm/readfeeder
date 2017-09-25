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


  collectionList() {
    let collections = this.props.collections;
    let titles = Object.keys(collections)
                  .map( id => collections[id]['title'] );
    return titles;
  }

  displayCollections() {
    return (
      <ul>
        {this.collectionList().map( collection => <li>collection.title</li>)}
      </ul>
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
              {this.collectionList()}

              <li className="dropdown-divider"></li>


            </ul>
          </div>
      </div>
    );
  }
}

export default FollowDropdown;
