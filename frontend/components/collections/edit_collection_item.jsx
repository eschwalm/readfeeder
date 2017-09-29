import React from 'react';

class EditCollectionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.collection);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCollection(this.state);
  }

  updateForm(collection) {
    return (
      <form
        style={{verticalAlign: "middle"}}
        onSubmit={this.handleSubmit}>
        <input
          onChange={this.update('title')}
          placeholder={collection.title}
          style={{padding: "3px"}}></input>
        <input
          style={{
            background: "#28a745",
            color: "white",
            borderRadius: "5px",
            padding: "6px",
            fontSize: "13px"}}
          type="submit" />
      </form>
    );
  }

  render() {
    const {
      deleteCollection,
      deleteFeedFromCollection,
      collection,
      feeds} = this.props;

    return (
    <li className="edit-collection-item">
      <div
        style={{
          display: "inline-block",
          verticalAlign: "baseline",
          width: "100%"}}>
          <h3
            className="feed-item"
            style={{
              margin: "10px",
              marginLeft: "15px",
              display: "-webkit-inline-box"}}>
            {collection.title}
          </h3>
          <button
            className=""
            type="button" data-toggle="collapse"
            data-target={`#${collection.id}`}
            aria-expanded="false"
            aria-controls="edit-collection">
            <i
              className="fa fa-pencil-square-o"
              aria-hidden="true"
              style={{fontSize: "20px", marginLeft: "10px"}}></i>
          </button>

          <div className="collapse" id={collection.id}>
            <div className="card card-block">
              {this.updateForm(collection)}
            </div>
          </div>
          <button
            onClick={() => deleteCollection(collection.id)}
            style={{
              fontSize: "20px",
              float: "right",
              verticalAlign: "-webkit-baseline-middle",
              marginRight: "15px",
              marginTop: "5px"}}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>

      </div>
    <ul className="edit-collection-feeds">
      {
        feeds.map( (feed, i) =>
        <li key={i} className="edit-feed-item">
          <img className="edit-feed-icon"
            src={"https://icons.better-idea.org/icon" +
              `?url=${feed.url}&size=70..120..200`}
              />

            {feed.name}
            <button
              className="edit-feed-btn"
              onClick={
                () => deleteFeedFromCollection(
                  { collectionId: collection.id, feedId: feed.id})}>
                  <i
                    className="fa fa-times-circle"
                    aria-hidden="true"
                    style={{
                      color: "red",
                      fontSize: "18px",
                      marginRight: "10px"}}></i>
                  </button>
                </li>
              )
            }
          </ul>
        </li>
      );
  }
}

export default EditCollectionItem;
