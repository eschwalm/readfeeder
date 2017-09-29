# Readfeeder
=============
[Live Demo](readfeeder.herokuapp.com)

ReadFeeder (inspired by [Feedly](https://feedly.com/)) is a RSS feed aggregator.

Technologies used:
  * Ruby on Rails
  * React
  * Redux

### Main Page
![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506717546/readfeeder_img.png "Main Page")

This app maintains a simple user interface that revolves around the collapsable side navigation bar to control what is rendered in the main content section.

## Features
=============
### Collections:
![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506723882/reedfeer_collections_j7lbt6.png "Collections")

Users can create and organize collections by category, allowing for an aggregate feed of subscribed sources.


### RSS Feeds:
![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506723008/reedfeeder_rss_fglcy8.png "RSS Feeds")

Users have a variety of RSS feeds that they can subscribe to by adding them to a collection. The follow dropdown button will toggle between adding and removing a subscription for each collection.

### Collection Feeds:

All of the article fetch requests are done up request, so this app stores minimal information in the backend. Making fetch requests for feeds and articles within a collection are done individually, so keeping track of the current collection and incoming feeds/articles required extra checking.

```javascript
export const collectionFeeds = (state, match) => {
  let id = Object.keys(state.collections).find( idx =>
    state.collections[idx].title.toLowerCase() === match.params.category
  );
  let collection = state.collections[id];


  if (collection) {
    let feeds = values(collection.feeds).map( feed => feed.feed_id);
    let currentFeeds = {};

    feeds.forEach( feed => {
      if (state.feeds[feed]) {
        currentFeeds[feed] = state.feeds[feed];
      }
    });

    return currentFeeds;
  }
  return state.feeds;
};
```

### Articles:
![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506724563/readfeeder_articles_uwosmg.png "Articles")
Article snippets are fetched and sorted by the latest publish date. A link to view the full article is available in the top right corner of every feed item.

The API response from both the feeds and articles from multiple sources of a collection became overly nested.

```javascript
sortArticles() {
  let sorted = flatten(values(this.mapSrcToArticles()));
  sorted = sortBy(sorted, ['publishedAt']);
  return sorted;
}
```

### Reads:
![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506724694/readfeeder_reads_p3rtni.png "Reads")
Articles can be saved to read later by clicking on the bookmark button in the top right, which will toggle a saved/unsaved status.


### Initial Development
+ [MVP list](mvp-list)
+ [Schema](schema)
+ [Routes](routes)
+ [Sample State](sample-state)
+ [Component Hierarchy](component-hierarchy)
+ [Wireframes](wireframes)

### Additional desired features:

* more sorting and layout features for the user.
* refactor the backend and how RSS feed request/responses are handled
