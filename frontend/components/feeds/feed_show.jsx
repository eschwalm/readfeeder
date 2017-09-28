import React from 'react';

import FeedShowItem from './feed_show_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    FeedShow.defaultProps = {
      articles: [{}],
      feed: { name: "" }
    };
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.source);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.source !==
        nextProps.match.params.source) {
      this.props.fetchFeed(nextProps.match.params.source);
    }
  }

  render() {
    const {articles, feed } = this.props;
    const source = this.props.match.params.source;

    return (
      <div>
        {
          feed && articles &&
          <div>
            <h1 className="feed-index-title">{feed.name}</h1>
            <ul className="feed-show-content">
              { articles.map(
                (article, id) => <FeedShowItem
                key={`${source}-${id}`}
                article={article}
                source={feed.name}
                />)
              }
              </ul>
          </div>
        }
      </div>
    );
  }
}

export default FeedShow;
