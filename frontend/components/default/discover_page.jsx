import React from 'react';

import groupBy from 'lodash/groupBy';
import random from 'lodash/random';
import includes from 'lodash/includes';
import values from 'lodash/values';
import sampleSize from 'lodash/sampleSize';
import capitalize from 'lodash/capitalize';

import DiscoverPageItem from './discover_page_item';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [],
      articles: []
    };
  }

  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchFeeds();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.feeds.length === 60 && this.state.feeds.length === 0) {
      this.selectFeeds();
    }
  }

  componentDidUpdate() {
    if (this.props.feeds.length === 60 && this.state.feeds.length === 0) {
      this.selectFeeds();
    }
  }

  collectionTitles(collections) {
    return Object.keys(collections)
      .map( id => collections[id]['title'] );
  }

  feedsByCategory() {
    let feeds = groupBy(this.props.feeds, (feed) => feed.category );
    return feeds;
  }

  selectFeeds() {
    let feeds = this.feedsByCategory();
    let categories = Object.keys(feeds);
    let selectedFeeds = [];


    for (let i = 0; selectedFeeds.length < 5; i++) {
      let category = categories[random(Math.floor(categories.length))];
      let source = feeds[category];

      if (source !== undefined && !includes(selectedFeeds, source)) {
        selectedFeeds.push(source);
      }
    }

    this.setState({feeds: selectedFeeds});
  }

  categoryToTitle(category) {
    switch (category) {
      case "science-and-nature":
        return "Science and Nature";
      case "sport":
        return "Sports";
      default:
        return capitalize(category);
    }
  }

  render() {
    const { collections, articles } = this.props;
    const { feeds } = this.state;

    return (
      <div>
        <h1 className="feed-index-title">
          Discover
        </h1>
          { collections && this.state.feeds.length === 5 &&
            <ul style={{display: "grid"}}>
              {
                this.state.feeds.map( (feed, i) =>
                  <DiscoverPageItem
                    articles={articles}
                    key={i}
                    feeds={sampleSize(feed, 3)}
                    collections={collections}
                    fetchCollectionFeed={this.props.fetchCollectionFeed}
                    categoryToTitle={this.categoryToTitle}
                    />
                )
              }
            </ul>
          }
      </div>
    );
  }
}

export default DiscoverPage;
