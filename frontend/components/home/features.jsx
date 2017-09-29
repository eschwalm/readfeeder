import React from 'react';

class Features extends React.Component {
  render() {
    return(
    <div className="features-container">
      <h3 className="features-title">
        Customize your sources
      </h3>

      <ul className="feature-list">
        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-rss fa-2x" aria-hidden="true"></i>
          <h6>Feeds</h6>
          <p>Subscribe to RSS Feeds to view
            the latest content.</p>
        </li>

        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-th-large fa-2x" aria-hidden="true"></i>
          <h6>Read</h6>
          <p>Process more content in less time</p>
        </li>

        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
          <h6>Articles</h6>
          <p>Access full articles from snippets that catch your interest.</p>
        </li>

        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
          <h6>Read Later</h6>
          <p>Save articles to easily access them later.</p>
        </li>

        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-list fa-2x" aria-hidden="true"></i>
          <h6>Organize</h6>
          <p>Create collections to categorize your subscriptions.</p>
        </li>

        <li className="feature-item">
          <i style={{color: "#28a745", marginBottom: "10px"}}
            className="fa fa-newspaper-o fa-2x" aria-hidden="true"></i>
          <h6>News</h6>
          <p>Powered by News API.</p>
        </li>

      </ul>
    </div>
  );
  }
}

export default Features;
