import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { feedArticles, currentFeed } from '../../selectors/feed_selectors';
import { fetchFeed } from '../../actions/feeds_actions';
import FeedShow from './feed_show';
import { savedArticles } from '../../selectors/article_selectors';

const mapStateToProps = ({entities}, {match}) => ({
  articles: feedArticles(entities),
  feed: currentFeed(entities, match)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (source) => dispatch(fetchFeed(source))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(FeedShow));
