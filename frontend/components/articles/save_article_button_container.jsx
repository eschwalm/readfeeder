import { connect } from 'react-redux';

import {
  saveArticle,
  removeArticle
} from '../../actions/article_actions';
import SaveArticleButton from './save_article_button';
import { savedArticles } from '../../selectors/article_selectors';

const mapStateToProps = ({entities}) => ({
  saved: savedArticles(entities)
});

const mapDispatchToProps = dispatch => ({
  saveArticle: (article) => dispatch(saveArticle(article)),
  removeArticle: (article) => dispatch(removeArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SaveArticleButton);
