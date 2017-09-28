import * as APIUtil from '../util/articles_api_util';

export const RECEIVE_SAVED_ARTICLES = "RECEIVE_SAVED_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

const receiveSavedArticles = saved => ({
  type: RECEIVE_SAVED_ARTICLES,
  saved
});

const receiveArticle = saved => ({
  type: RECEIVE_ARTICLE,
  saved
});

export const fetchSavedArticles = () => dispatch => (
  APIUtil.fetchSavedArticles()
    .then( articles => dispatch(receiveSavedArticles(articles)))
);

export const saveArticle = article => dispatch => (
  APIUtil.saveArticle(article)
    .then( savedArticle => dispatch(receiveArticle(savedArticle)))
);

export const removeArticle = id => dispatch => (
  APIUtil.removeArticle(id)
    .then( article => dispatch(receiveArticle(article)))
);
