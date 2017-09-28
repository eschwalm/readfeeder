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

export const fetchSavedArticles = () => (
  APIUtil.fetchSavedArticles()
    .then( articles => receiveSavedArticles(articles))
);

export const saveArticle = article => (
  APIUtil.saveArticle(article)
    .then( savedArticle => receiveArticle(savedArticle))
);

export const removeArticle = id => (
  APIUtil.removeArticle(id)
    .then( article => receiveArticle(article))
);
