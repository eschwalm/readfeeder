import React from 'react';
import CollectionShowItem from '../collections/collection_show_item';

import values from 'lodash/values';
import flatten from 'lodash/flatten';
import sortBy from 'lodash/sortBy';
import concat from 'lodash/concat';

class AllCollections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    this.props.fetchCollections();
  }

  mergeFeeds(nextProps) {
    let collections = values(nextProps.collection);
    let feeds = [];

    collections.forEach( collection => feeds.push(collection.feeds));
    return flatten(feeds);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collection.feeds && !this.props.feeds) {

      this.mergeFeeds(nextProps).forEach( feed =>
        this.props.fetchCollectionFeed(feed.feed_id));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.collection &&
      Object.keys(prevProps.feeds).length === 0) {
      this.mergeFeeds(this.props).forEach( feed =>
        this.props.fetchCollectionFeed(feed.feed_id));
    }
  }

  mapSrcToArticles() {
    let feeds = this.props.feeds;
    let sources = Object.keys(feeds);
    let articles = values(feeds);

    for (let i = 0; i < sources.length; i++) {
      for (let j = 0; j < articles[i].length; j++) {
        articles[i][j].src = sources[i];
      }
    }


    return articles;
  }

  sortArticles() {
    let sorted = flatten(values(this.mapSrcToArticles()));
    sorted = sortBy(sorted, ['publishedAt']);
    return sorted;
  }

  render() {
    const { collection } = this.props;

    return (
      <div>
        { collection && this.props.feeds &&
          <div>
            <h1 className="feed-index-title">All</h1>
              <ul>
                {this.sortArticles().map( (article, id) =>
                  <CollectionShowItem
                    key={id}
                    article={article}
                    />
                )}
              </ul>
          </div>
        }
      </div>
    );
  }
}

export default AllCollections;
