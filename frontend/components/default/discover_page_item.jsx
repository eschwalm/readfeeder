import React from 'react';
import random from 'lodash/random';
import FeedIndexItem from '../feeds/feed_index_item';

const DiscoverPageItem = ({categoryToTitle, feeds, collections}) => (
<li className="discover-page-item">
  { feeds && collections &&
    <div >
      <h3>{categoryToTitle(feeds[0].category)}</h3>
      <ul>
        {
          feeds.map( (feed, i) =>
            <FeedIndexItem
              key={i}
              feedId={feed.id}
              Feed={feed}
              Collections={collections}/>
          )
        }
      </ul>
    </div>
  }
</li>
);

export default DiscoverPageItem;
