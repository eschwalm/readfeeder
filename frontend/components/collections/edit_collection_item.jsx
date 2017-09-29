import React from 'react';

const EditCollectionItem = ({ deleteFeedFromCollection, collection, feeds}) => (
  <li className="edit-collection-item">
    <h3 className="feed-item" style={{margin: "10px", marginLeft: "15px"}}>
      {collection.title}
    </h3>
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

export default EditCollectionItem;
