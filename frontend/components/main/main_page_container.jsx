import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSavedArticles } from '../../actions/article_actions';

import MainPage from './main_page';

const mapStateToProps = (state, ownProps) => ({
  saved: state.saved
});

const mapDispatchToProps = (dispatch) => ({
  fetchSavedArticles: () => dispatch(fetchSavedArticles())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
)(MainPage);
