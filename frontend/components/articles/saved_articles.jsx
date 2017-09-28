import React from 'react';

class SavedArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <h1>Saved Articles Page!</h1>
    );
  }
}

export default SavedArticles;
