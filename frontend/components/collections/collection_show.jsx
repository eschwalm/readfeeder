import React from 'react';
import Infinite from 'react-infinite';

import CollectionShowItem from './collection_show_item';

import capitalize from 'lodash/capitalize';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';
import flatten from 'lodash/flatten';

class CollectionShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    const colFeeds = nextProps.collection.feeds;
    if (nextProps.location.pathname !== this.props.location.pathname) {
      nextProps.collection.feeds.forEach( feed =>
        this.props.fetchCollectionFeed(feed.feed_id)
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.collection !== this.props.collection) {
      this.props.collection.feeds.forEach( feed =>
        this.props.fetchCollectionFeed(feed.feed_id)
      );
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
    const { articles } = this.state;
    console.log(this.props);
    return (
      <div>
        { collection && this.props.feeds &&
          <div>
            <h1>{collection.title}</h1>
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

export default CollectionShow;
