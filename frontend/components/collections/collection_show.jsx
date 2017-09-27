import React from 'react';
import capitalize from 'lodash/capitalize';

class CollectionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !==
        nextProps.match.params.category) {
          console.log("props received!");
      // this.props.fetchFeed(nextProps.match.params.source);
    }
  }


  render() {
    const title = capitalize(this.props.match.params.category);

    console.log(this.props);
    return (
      <h1>{title}</h1>
    );
  }
}

export default CollectionShow;
