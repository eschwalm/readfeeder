import React from 'react';
import CollectionShowContainer from '../collections/collection_show_container';

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

  // mergeFeeds(nextProps) {
  //   let collections = values(nextProps.collection);
  //   let feeds = [];
  //
  //   collections.forEach( collection => feeds.push(collection.feeds));
  //   return flatten(feeds);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location.pathname !== this.props.location.pathname) {
  //
  //     this.mergeFeeds(nextProps).forEach( feed =>
  //       this.props.fetchCollectionFeed(feed.feed_id));
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.f !== prevProps.collection) {
  //     this.mergeFeeds(this.props).forEach( feed =>
  //       this.props.fetchCollectionFeed(feed.feed_id));
  //   }
  // }
  //
  // mapSrcToArticles() {
  //   let feeds = this.mergeFeeds(this.props);
  //   let sources = Object.keys(feeds);
  //   let articles = values(feeds);
  //
  //   for (let i = 0; i < sources.length; i++) {
  //     for (let j = 0; j < articles[i].length; j++) {
  //       articles[i][j].src = sources[i];
  //     }
  //   }
  //
  //
  //   return articles;
  // }
  //
  // sortArticles() {
  //   let sorted = flatten(values(this.mapSrcToArticles()));
  //   sorted = sortBy(sorted, ['publishedAt']);
  //   return sorted;
  // }

  render() {
    const { collection } = this.props;

    return (
      <div>
        { collection && this.props.feeds &&
          <div>
            <h1 className="feed-index-title">All</h1>
              <ul>
                {collection.map( (collect, id) =>
                  <CollectionShowContainer
                    key={id}
                    collection={collect}
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
