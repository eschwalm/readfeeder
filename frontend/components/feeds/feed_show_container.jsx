import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { feedArticles } from '../../selectors/feed_selectors';
import { fetchFeed } from '../../actions/feeds_actions';
import FeedShow from './feed_show';

const mapStateToProps = ({entities}, ownProps) => ({
  articles: feedArticles(entities)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (source) => dispatch(fetchFeed(source))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(FeedShow));
