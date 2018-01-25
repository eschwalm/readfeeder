export const fetchFeeds = () => (
  $.ajax({
    method: 'GET',
    url: "https://newsapi.org/v1/sources?language=en" +
          "&apiKey=f32df2380d74401aadbe6fce2277807b"
  })
);

export const fetchFeed = (source) => (
  $.ajax({
    method: 'GET',
    url: "https://newsapi.org/v1/articles?" +
         `source=${source}` +
         "&apiKey=f32df2380d74401aadbe6fce2277807b"
  })
);

export const addFeed = ({name, url}) => (
  $.ajax({
    method: 'POST',
    url: 'api/feeds',
    data: {feed: {
      title: name,
      url
      }}
  })
);

export const addFilter = (url) => (
  url = url.replace(/^http:\/\//i, 'https://')
);
