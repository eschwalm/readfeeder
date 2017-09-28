import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchSavedArticles,
  saveArticle,
  removeArticle
} from '../../actions/article_actions';
import { savedArticles } from '../../selectors/article_selectors';
import SavedArticles from './saved_articles';

const mapStateToProps = ({entities}) => ({
  saved: savedArticles(entities),
  article: entities.article
});

const mapDispatchToProps = dispatch => ({
  fetchSavedArticles: () => dispatch(fetchSavedArticles()),
  saveArticle: (article) => dispatch(saveArticle(article)),
  removeArticle: (id) => dispatch(removeArticle(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(SavedArticles)
);
